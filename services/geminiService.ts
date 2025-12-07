
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from '../constants';

const getSystemInstruction = () => {
  const projectContext = PROJECTS.map(p => 
    `- ${p.name} (${p.year}): ${p.description}. Tech Stack: ${p.techStack.join(', ')}`
  ).join('\n');

  return `You are an AI Assistant representing Krishna Patil, a Software Development Engineer.
  Your goal is to professionally answer questions about Krishna's resume, skills, and projects to potential recruiters or clients.
  
  Krishna's Key Profile:
  - Role: Software Development Engineer (SDE)
  - Education: B.Sc. (2024), Sant Gadge Baba Amravati University.
  - Core Skills: Python, SQL (Oracle/MySQL), Django, Object-Oriented Design, Data Structures.
  - Cloud: Google Cloud Platform (Arcade Facilitator 2025).
  - Location: Pune, India.
  
  Krishna's Projects:
  ${projectContext}
  
  Tone: Professional, confident, yet humble and helpful. Concise answers.
  If asked for contact details, please direct the user to use the Contact Form on the website. Do not reveal private email addresses.
  If asked about something not in the resume, you can say "While that isn't explicitly listed on his resume, Krishna is a quick learner with strong CS foundations."`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm currently offline (API Key missing). Please check Krishna's resume manually!";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble retrieving that information right now. Please try again.";
  }
};

export const refineDraft = async (draft: string): Promise<string> => {
    try {
        let apiKey: string | undefined;
        try {
          apiKey = process.env.API_KEY;
        } catch (e) {
          console.warn("Accessing process.env failed");
        }
        
        if (!apiKey || !draft.trim()) return draft;
    
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Rewrite the following email draft to be more professional, concise, and persuasive. Keep the tone business-casual and polite. Return ONLY the rewritten text. Draft: "${draft}"`,
        });
    
        return response.text || draft;
    } catch (error) {
        console.error("Gemini Refine Error:", error);
        return draft;
    }
};
