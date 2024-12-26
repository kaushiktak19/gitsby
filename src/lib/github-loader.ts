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

// Load environment variables
dotenv.config();

export const loadGithubRepo = async (githubUrl: string) => {
    const githubToken = process.env.GITHUB_TOKEN; // Read the token from environment variables

    if (!githubToken) {
        throw new Error('GitHub token not found. Please set GITHUB_TOKEN in your environment variables.');
    }

    const loader = new GithubRepoLoader(githubUrl, {
        accessToken: githubToken,
        branch: 'main',
        ignoreFiles: ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'bun-lock'],
        recursive: true,
        unknown: 'warn',
        maxConcurrency: 5,
    });

    const docs = await loader.load();
    return docs;
};

// Test the function
(async () => {
    try {
        const docs = await loadGithubRepo('https://github.com/kaushiktak19/gitsby');
        console.log(docs);
    } catch (error) {
        console.error('Failed to load GitHub repository:', error);
    }
})();
