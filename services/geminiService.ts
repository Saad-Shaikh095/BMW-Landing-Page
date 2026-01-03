
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the BMW M8 Virtual Concierge. You are professional, sophisticated, and deeply knowledgeable about the BMW M8 Competition.
Your goal is to assist users with technical specs, luxury features, and performance details of the M8.
- The M8 has a 4.4L V8 TwinPower Turbo engine with 617 HP.
- 0-60 mph is 3.0 seconds.
- It features xDrive with RWD capability.
- Luxury includes Merino leather, Harman Kardon or Bowers & Wilkins sound, and Live Cockpit Professional.
Always maintain a high-end, brand-aligned tone. Keep responses concise and engaging.
`;

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-3-flash-preview";
  
  try {
    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. How can I help you explore the M8?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The system is currently undergoing maintenance. Please explore our specifications below.";
  }
};
