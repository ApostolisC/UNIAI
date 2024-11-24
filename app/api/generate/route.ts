import { Content, GoogleGenerativeAI } from '@google/generative-ai';

// Extend the Content type to include the 'name' property
interface ExtendedContent extends Content {
    name: string;
}
import { NextResponse } from 'next/server';

// Predefined event information
const eventInfo = `
Event Name: AI Innovation Summit
Date: November 10, 2024
Time: 10:00 AM - 4:00 PM
let cachedContents: ExtendedContent[] = [{
Details: Join us for a day of inspiring talks, workshops, and networking opportunities.
`;

// Initialize cachedContents with event information, including a 'name' field
let cachedContents: Content[] = [{
    role: eventInfo,  // Add a unique name or identifier
    parts: [], // Assuming 'body' is the correct property for the content
}];

export async function POST(req: { json: () => any; }, res: any) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

    try {
        const model = genAI.getGenerativeModelFromCachedContent({
            model: "gemini-pro",
            contents: cachedContents,
            name: "AI Innovation Summit",
        });

        const data = await req.json();
        const userQuestion = data.body;

        // Create a prompt that combines the event info with the user's question
        const prompt = userQuestion;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const output = await response.text();

        return NextResponse.json({ code: output });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
