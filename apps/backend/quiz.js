import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const GEMINI_API_KEY = process.env.GOOGLE_AI_API_KEY_1;

const SYSTEM_PROMPT = `
You are a Grand Maester of the Citadel and an expert scholar on George R.R. Martin's "A Song of Ice and Fire" universe.
Your task is to generate unique, challenging, and diverse trivia questions based STRICTLY on the book series (not the TV adaptation).
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
4. **Variety Requirement**: Randomly select a topic from deep lore such as: House Lineages and Heraldry, The Dance of the Dragons, The Blackfyre Rebellions, History of Essos/Valyria, The Faith of the Seven/R'hllor, The Night's Watch History, or obscure minor characters.
5. **Difficulty**: Avoid surface-level questions (e.g., "Who is Ned Stark?"). Focus on specific details, historical events mentioned in "The World of Ice and Fire", or differences between the books and the show.
`;

const USER_PROMPT = `Generate a unique "A Song of Ice and Fire" trivia question based on a random piece of deep lore. Ensure the question tests detailed book knowledge.`;

// Example dynamic injection in your code logic
const dynamicUserPrompt = `${USER_PROMPT} (Random Seed: ${Date.now()})`;

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
                    parts: [{ text: dynamicUserPrompt }],
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
