# Gitsby Project Management Platform

Gitsby is a platform designed to help teams manage their projects efficiently by integrating with GitHub, utilizing AI-driven summaries, and providing tools for collaboration. This application allows users to track GitHub commits, ask questions about their projects, process meeting recordings, and more. The system leverages various technologies including **Next.js**, **Tailwind CSS**, **pgvector**, and **AssemblyAI** for transcription and summarization.

## Features

- **Dashboard**: Displays a list of projects with recent commits, AI-generated summaries, and project details.
- **Q&A Section**: Allows users to ask project-related questions and receive AI-generated answers based on the project’s codebase and summaries.
- **Meetings**: Upload audio files of meetings, transcribe them using AssemblyAI, and generate summaries.
- **Project Creation**: Create a new project by linking a GitHub repository and importing commits. AI-driven summaries and code embeddings are generated for easier querying.
- **Member Management**: Invite team members to the project, manage roles, and collaborate more effectively.
- **Archive Projects**: Archive completed projects for easy reference while keeping them inactive.
  
## Tech Stack

- **Frontend**: 
  - Next.js
  - Tailwind CSS
  - ShadCN
  
- **Backend**: 
  - Express (for API routes)
  - Prisma ORM (for database interactions)
  
- **Database**: 
  - PostgreSQL with `pgvector` for vector embeddings
  
- **External Services**:
  - Langchain (for extracting files from repository)
  - GitHub API (via Octokit)
  - Gemini API (for AI summaries)
  - AssemblyAI (for meeting transcription)

## Process Flow Summary

The overall workflow is as follows:

1. **Sign-in** → User authenticates using **Clerk**.
2. **Dashboard** → Displays all projects, recent commits, and options to interact with the project.
3. **Create Project** → User creates a project by entering a GitHub URL.
4. **Commits Processing** → Fetches GitHub commits, generates summaries using **Gemini API**, and stores them in **pgvector** for easy querying.
5. **Q&A** → Users can ask questions related to the project and get AI-generated answers.
6. **Meeting Transcription** → Users upload audio files for meetings, which are transcribed and summarized using **AssemblyAI**.
7. **Member Management** → Users can invite and manage project members.
8. **Archive Project** → Projects can be archived once completed.



