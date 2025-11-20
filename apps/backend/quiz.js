import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const GEMINI_API_KEY = process.env.GOOGLE_AI_API_KEY_1;

// UPDATE: Explicit instructions to exclude labels
const SYSTEM_PROMPT = `
You are a Trivia API. 
Your task is to generate JavaScript questions.
You must respond ONLY with a valid JSON object based on this schema:
{
    "question": "The text of the question",
    "options": [
        "Text of option 1", 
        "Text of option 2", 
        "Text of option 3", 
        "Text of option 4"
    ],
    "correctAnswer": "The exact text string of the correct option"
}

IMPORTANT RULES:
1. **Do not** include labels like "A)", "B)", "1.", or "a." in the options.
2. The options array must contain **only the answer text**.
3. The "correctAnswer" must match one of the strings in "options" exactly.
`;

const USER_PROMPT = `Generate a JavaScript question from JavaScript Interview conecepts.`;

if (!GEMINI_API_KEY) {
    console.error("Please provide API KEY.");
    process.exit(1);
}

const client = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function generateGkProblem() {
    try {
        const response = await client.models.generateContent({
            model: "gemini-2.5-flash-lite",
            config: {
                systemInstruction: SYSTEM_PROMPT,
                responseMimeType: "application/json", 
                temperature: 0.7,
            },
            contents: [
                {
                    role: "user",
                    parts: [{ text: USER_PROMPT }],
                },
            ],
        });

        const rawText = response.text;
        const jsonResponse = JSON.parse(rawText);
        
        // console.log(jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Error generating content:", error);
    }
}
