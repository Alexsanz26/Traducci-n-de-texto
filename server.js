const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
const port = 3000;

// Initialize the Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Fallback responses in case the AI fails
const chatbotResponses = {
    "es": {
        greeting: "¡Hola! Soy el asistente virtual de Zoom. ¿En qué puedo ayudarte hoy?",
        plans: "Tenemos varios planes disponibles: Básico (gratis), Pro ($15.99/mes), Business ($19.99/mes) y Enterprise (contáctanos para precios).",
        features: "Nuestras características principales incluyen: videoconferencias HD, compartir pantalla, chat integrado, salas para grupos pequeños, grabación de reuniones y seguridad avanzada.",
        security: "Nuestra plataforma utiliza cifrado de extremo a extremo y múltiples capas de seguridad para proteger tus datos y reuniones.",
        support: "Puedes contactar a nuestro equipo de soporte 24/7 a través de chat, email o teléfono. También tenemos un extenso centro de ayuda con guías y tutoriales.",
        default: "Gracias por tu mensaje. No estoy seguro de entender tu pregunta. ¿Podrías ser más específico sobre lo que necesitas saber de Zoom?"
    },
    "en": {
        greeting: "Hello! I'm Zoom's virtual assistant. How can I help you today?",
        plans: "We offer several plans: Basic (free), Pro ($15.99/month), Business ($19.99/month), and Enterprise (contact us for pricing).",
        features: "Our main features include: HD video conferencing, screen sharing, integrated chat, breakout rooms, meeting recording, and advanced security.",
        security: "Our platform uses end-to-end encryption and multiple security layers to protect your data and meetings.",
        support: "You can contact our support team 24/7 via chat, email, or phone. We also have an extensive help center with guides and tutorials.",
        default: "Thank you for your message. I'm not sure I understand your question. Could you be more specific about what you need to know about Zoom?"
    }
};

// Function to get fallback response
function getFallbackResponse(message, lang) {
    message = message.toLowerCase();
    
    if (message.includes("hola") || message.includes("hello") || message.includes("hi")) {
        return chatbotResponses[lang].greeting;
    } else if (message.includes("plan") || message.includes("precio") || message.includes("cost") || message.includes("price")) {
        return chatbotResponses[lang].plans;
    } else if (message.includes("feature") || message.includes("función") || message.includes("característica")) {
        return chatbotResponses[lang].features;
    } else if (message.includes("segur") || message.includes("security") || message.includes("safe")) {
        return chatbotResponses[lang].security;
    } else if (message.includes("ayuda") || message.includes("support") || message.includes("help")) {
        return chatbotResponses[lang].support;
    } else {
        return chatbotResponses[lang].default;
    }
}

// Ruta principal para el chatbot con Gemini AI
app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;
        const lang = req.body.language || "es";
        const responseLanguage = lang === "en" ? "English" : "español";

        // Verificar si el API key está configurado
        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "") {
            console.log("⚠️ No Gemini API Key found, using fallback responses");
            return res.json({ reply: getFallbackResponse(userMessage, lang) });
        }

        // Intenta usar Gemini AI
        const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro-002" });
        const chat = model.startChat();

        // Enviar mensaje a Gemini AI
        const result = await chat.sendMessage(`Respond in ${responseLanguage} as a Zoom customer service agent: ${userMessage}`);
        const responseText = result.response.text();

        res.json({ reply: responseText });
    } catch (error) {
        console.error("❌ Error with Gemini API:", error);
        const lang = req.body.language || "es";
        
        // Usar respuestas de fallback en caso de error
        const fallbackResponse = getFallbackResponse(req.body.message, lang);
        res.json({ reply: fallbackResponse });
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
    console.log(`🤖 Chatbot ready to respond in multiple languages`);
    
    // Verificar si el API key está configurado
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "") {
        console.log("⚠️ Warning: No Gemini API Key found in .env file. The chatbot will use fallback responses.");
    }
});