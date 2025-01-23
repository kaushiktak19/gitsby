# Gitsby Project Management Platform

**Gitsby** is a platform designed to help teams track GitHub commits, collaborate effectively, and leverage AI-driven insights. By integrating with GitHub, utilizing **tRPC** for API routes, and providing powerful tools for meeting transcriptions, Q&A, and team management, Gitsby brings all project elements into one seamless experience.

Try out it out from here - [https://gitsby-psi.vercel.app/](https://gitsby-psi.vercel.app/)

## Features

- **Dashboard**: A central hub displaying a list of projects, recent commits, AI-generated summaries, and project details.
- **Q&A Section**: Users can ask project-related questions, with AI-generated responses based on the project’s codebase and summaries.
- **Meetings**: Upload meeting recordings to transcribe and generate summaries via **AssemblyAI**.
- **Project Creation**: Create new projects by linking to GitHub repositories, automatically importing commits, and generating AI-driven summaries and code embeddings for querying.
- **Member Management**: Invite and manage project members, assigning roles for better team collaboration.
- **Archive Projects**: Archive completed projects to keep them accessible for future reference while maintaining a streamlined active project list.

## Tech Stack

### Frontend:
- **Next.js**
- **Tailwind CSS**
- **ShadCN**

### Backend:
- **tRPC** (for API routes)

### Database:
- **PostgreSQL** with **Prisma ORM** for handling database interactions.
- **pgvector** for storing vector embeddings of codebase summaries and commits for efficient querying.

### External Services:
- **Langchain** (for extracting files from GitHub repositories)
- **GitHub API** (via **Octokit**)
- **Gemini API** (for generating AI summaries)
- **AssemblyAI** (for meeting transcription)

## Process Flow Summary

Here’s how the platform works step-by-step:

1. **Sign-in** → Users authenticate via **Clerk**.
2. **Dashboard** → Displays all active projects with recent commits and AI-generated summaries.
3. **Create Project** → Users input a GitHub URL to create a project. **Prisma** interacts with the database to store project details, and **Langchain** extracts repository files.
4. **Commits Processing** → GitHub commits are fetched and stored in the database. **Gemini API** generates summaries, which are then stored in **pgvector** for efficient querying.
5. **Q&A** → Users can ask questions related to the project’s codebase, and **tRPC** routes fetch AI-generated answers based on the stored summaries and codebase.
6. **Meeting Transcription** → Users upload meeting audio files, which **AssemblyAI** transcribes and summarizes. The transcriptions are stored in the database.
7. **Member Management** → Users invite team members and manage roles. **Prisma** is used to update member data in the database.
8. **Archive Project** → Completed projects are archived but remain accessible for future reference in the database.