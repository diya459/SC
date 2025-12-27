
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface StyleAdvice {
  vibe: string;
  lightingSuggestion: string;
  productionNote: string;
  recommendedServices: string[];
}

export const getStyleConsultation = async (userPrompt: string): Promise<StyleAdvice> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a creative director for a luxury production house called "SC". 
      The user is asking for production advice or a style guide for their event: "${userPrompt}". 
      Respond as an elite, sophisticated editorial consultant.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            vibe: { type: Type.STRING, description: "A summary of the aesthetic vibe (e.g., 'Noir Minimalism', 'Gilded Rococo')." },
            lightingSuggestion: { type: Type.STRING, description: "Advice on lighting and atmosphere." },
            productionNote: { type: Type.STRING, description: "A high-level professional note on execution." },
            recommendedServices: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Services like 'The Runway', 'The Union', 'The Monolith', or 'The Faces'."
            }
          },
          required: ["vibe", "lightingSuggestion", "productionNote", "recommendedServices"]
        }
      }
    });

    const result = JSON.parse(response.text);
    return result;
  } catch (error) {
    console.error("Gemini Style Error:", error);
    return {
      vibe: "Timeless Excellence",
      lightingSuggestion: "High-contrast chiaroscuro lighting.",
      productionNote: "Ensure every frame breathes with intentional negative space.",
      recommendedServices: ["The Monolith", "The Faces"]
    };
  }
};
