// import { GithubRepoLoader} from '@langchain/community/document_loaders/web/github'
// import { env } from 'process'

// export const loadGithubRepo = async (githubUrl: string, githubToken?: string) => {
//     const loader = new GithubRepoLoader (githubUrl, {
//         accessToken: githubToken || '',
//         branch: 'main',
//         ignoreFiles: ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'bun-lock'],
//         recursive: true,
//         unknown: 'warn',
//         maxConcurrency: 5
//     })

//     const docs = await loader.load()
//     return docs
// }

// console.log(loadGithubRepo('https://github.com/kaushiktak19/gitsby'))
import { GithubRepoLoader } from '@langchain/community/document_loaders/web/github';
import * as dotenv from 'dotenv';
import { generateEmbedding, summariseCode } from './gemini';
import { Document } from '@langchain/core/documents';
import { db } from '@/server/db';

// Load environment variables
dotenv.config();

export const loadGithubRepo = async (githubUrl: string, githubToken?: string) => {
  const loader = new GithubRepoLoader(githubUrl, {
      accessToken: githubToken || process.env.GITHUB_TOKEN,
      branch: 'main',
      ignoreFiles: [
        'package-lock.json', 
        'yarn.lock', 
        'pnpm-lock.yaml', 
        'bun-lock',
        'node_modules/**', // Ignore the node_modules directory
        '.git/**', // Ignore .git folder
        '.env', // Ignore environment files
        '.env.local',
        '.DS_Store', // Ignore macOS-specific files
        'dist/**', // Ignore build folders
        'build/**',
        'coverage/**', // Ignore test coverage folders
        '*.log', // Ignore log files
      ],
      recursive: true,
      unknown: 'warn',
      maxConcurrency: 5,
  });

  const docs = await loader.load();
  return docs;
};

// Test the function
// (async () => {
//     try {
//         const docs = await loadGithubRepo('https://github.com/kaushiktak19/gitsby');
//         console.log(docs);
//     } catch (error) {
//         console.error('Failed to load GitHub repository:', error);
//     }
// })();

export const indexGithubRepo = async (
  projectId: string,
  githubUrl: string,
  githubToken?: string
) => {
  const docs = await loadGithubRepo(githubUrl, githubToken);
  const allEmbeddings = await generateEmbeddings(docs);
  
  await Promise.allSettled(allEmbeddings.map(async (embedding, index) => {
    console.log(`processing ${index} of ${allEmbeddings.length}`)
    if (!embedding) return;

    const sourceCodeEmbedding = await db.sourceCodeEmbedding.create({
        data: {
            summary: embedding.summary,
            sourceCode: embedding.sourceCode,
            fileName: embedding.fileName,
            projectId,
        },
    });

    await db.$executeRaw`
        UPDATE "SourceCodeEmbedding"
        SET "summaryEmbedding" = ${embedding.embedding}::vector
        WHERE "id" = ${sourceCodeEmbedding.id}
    `
  }));
};

const generateEmbeddings = async (docs: Document[]) => {
  return await Promise.all(
    docs.map(async (doc) => {
      const summary = await summariseCode(doc);
      const embedding = await generateEmbedding(summary);
      return {
        summary,
        embedding,
        sourceCode: JSON.parse(JSON.stringify(doc.pageContent)),
        fileName: doc.metadata.source,
      };
    })
  );
};
