
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIAssponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are the AI Concierge for Clark Kent, a world-class graphic designer. 
        Your tone is professional yet edgy, mysterious, and sophisticated. 
        Clark specializes in streetwear aesthetics, bold typography, and cyberpunk visuals. 
        He has worked on concepts for Nike, The North Face, and major editorial houses.
        Answer questions about Clark's availability, style, and philosophy. 
        Keep responses concise and visually engaging.`,
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The signal is weak in the phantom zone. Try asking again shortly.";
  }
};
