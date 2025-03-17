document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar/ocultar el chat
    window.toggleChat = function() {
        const chat = document.getElementById("chat-container");
        chat.classList.toggle("active");
    };

    // Inicializar el idioma desde localStorage
    const savedLang = localStorage.getItem("selectedLanguage") || "es";
    changeLanguage(savedLang);

    // Eventos para cambiar de idioma
    document.querySelectorAll("#language-list li").forEach(item => {
        item.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");
            changeLanguage(lang);
        });
    });

    // Mostrar/ocultar el selector de idioma
    const languageButton = document.getElementById("language-button");
    if (languageButton) {
        languageButton.addEventListener("click", function(e) {
            e.stopPropagation();
            document.getElementById("language-list").classList.toggle("show");
        });
    }

    // Cerrar el menú de idiomas al hacer clic fuera
    document.addEventListener("click", function() {
        document.getElementById("language-list").classList.remove("show");
    });

    // Función para enviar mensaje al chatbot
    window.sendMessage = function() {
        const input = document.getElementById("user-input");
        const message = input.value.trim();
        
        if (message === "") return;
        
        // Añadir mensaje del usuario al chat
        const chatBox = document.getElementById("chat-box");
        const userDiv = document.createElement("div");
        userDiv.className = "user";
        userDiv.textContent = message;
        chatBox.appendChild(userDiv);
        
        // Limpiar input
        input.value = "";
        
        // Mostrar indicador de escritura
        const typingDiv = document.createElement("div");
        typingDiv.className = "bot typing";
        typingDiv.textContent = "...";
        chatBox.appendChild(typingDiv);
        
        // Hacer scroll al final
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Obtener el idioma actual
        const currentLang = document.documentElement.lang || "es";
        
        // Enviar solicitud al servidor
        fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                language: currentLang
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return response.json();
        })
        .then(data => {
            // Eliminar indicador de escritura
            chatBox.removeChild(typingDiv);
            
            // Añadir respuesta del bot
            const botDiv = document.createElement("div");
            botDiv.className = "bot";
            botDiv.textContent = data.reply;
            chatBox.appendChild(botDiv);
            
            // Hacer scroll al final
            chatBox.scrollTop = chatBox.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
            // Eliminar indicador de escritura
            if (typingDiv.parentNode === chatBox) {
                chatBox.removeChild(typingDiv);
            }
            
            // Añadir mensaje de error
            const errorDiv = document.createElement("div");
            errorDiv.className = "bot error";
            errorDiv.textContent = currentLang === "en" ? 
                "Sorry, I couldn't process your message. Please try again." : 
                "Lo siento, no pude procesar tu mensaje. Por favor, inténtalo de nuevo.";
            chatBox.appendChild(errorDiv);
            
            // Hacer scroll al final
            chatBox.scrollTop = chatBox.scrollHeight;
        });
    };

    // Permitir enviar mensaje con Enter
    const userInput = document.getElementById("user-input");
    if (userInput) {
        userInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });
    }

    // Inicializar el chat con un mensaje de bienvenida
    const chatBox = document.getElementById("chat-box");
    if (chatBox && chatBox.childElementCount === 0) {
        const currentLang = document.documentElement.lang || "es";
        const greeting = document.createElement("div");
        greeting.className = "bot";
        greeting.textContent = currentLang === "en" ? 
            "Hello! I'm Zoom's virtual assistant. How can I help you today?" : 
            "¡Hola! Soy el asistente virtual de Zoom. ¿En qué puedo ayudarte hoy?";
        chatBox.appendChild(greeting);
    }
});

// Función para cambiar el idioma
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Actualizar elementos con atributo data-lang
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Actualizar placeholders
    document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
        const key = el.getAttribute("data-lang-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute("placeholder", translations[lang][key]);
        }
    });

    // Actualizar botón de idioma
    const langButton = document.getElementById("language-button");
    const flag = lang === "en" ? "https://flagcdn.com/gb.svg" : "https://flagcdn.com/es.svg";
    const langText = lang === "en" ? "English" : "Español";
    langButton.innerHTML = `<img src="${flag}" alt="${langText}" width="20" height="15"> ${langText} ▼`;

    // Guardar en localStorage
    localStorage.setItem("selectedLanguage", lang);
    
    // Actualizar título de la página
    document.title = translations[lang]["title"] || "Zoom Clone";
    
    // Actualizar el contenido del chatbot
    updateChatbotContent(lang);
}

// Función para actualizar el contenido del chatbot
function updateChatbotContent(lang) {
    // Actualizar título del chatbot
    const chatTitle = document.querySelector(".chat-header h3 span");
    if (chatTitle) {
        chatTitle.textContent = translations[lang]["chatbot.title"] || "Virtual Assistant";
    }
    
    // Actualizar placeholder del input
    const chatInput = document.getElementById("user-input");
    if (chatInput) {
        chatInput.placeholder = translations[lang]["chatbot.placeholder"] || "Type a message...";
    }
    
    // Actualizar botón de enviar
    const sendButton = document.querySelector(".input-container button");
    if (sendButton) {
        sendButton.textContent = translations[lang]["chatbot.send"] || "📩";
    }
    
    // Reiniciar el chat solo si está vacío o si se solicita explícitamente
    const chatBox = document.getElementById("chat-box");
    if (chatBox && chatBox.childElementCount === 0) {
        const greeting = document.createElement("div");
        greeting.className = "bot";
        greeting.textContent = translations[lang]["chatbot.greeting"] || 
            (lang === "en" ? "Hello! How can I help you today?" : "¡Hola! ¿En qué puedo ayudarte hoy?");
        chatBox.appendChild(greeting);
    }
}