import dotenv from "dotenv";
dotenv.config();

import { AssemblyAI } from "assemblyai";

if (!process.env.ASSEMBLYAI_API_KEY) {
    throw new Error("ASSEMBLYAI_API_KEY is not defined. Check your environment variables.");
}

const client = new AssemblyAI({ apiKey: process.env.ASSEMBLYAI_API_KEY });

function msToTime(ms: number) {
    const seconds = ms / 1000;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export const processMeeting = async (meetingUrl: string) => { // Use "string" here
    const transcript = await client.transcripts.transcribe({
        audio: meetingUrl,
        auto_chapters: true,
    });

    const summaries =
        transcript.chapters?.map((chapter) => ({
            start: msToTime(chapter.start),
            end: msToTime(chapter.end),
            gist: chapter.gist,
            headline: chapter.headline,
            summary: chapter.summary,
        })) || [];
    if (!transcript.text) throw new Error("No transcript found");

    return {
        summaries
    };
};

