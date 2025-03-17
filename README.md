# Traducción de texto en un Sitio Web con Chatbot

Este proyecto es un clon de un sitio web con traducción de texto integrada y un chatbot impulsado por **Gemini AI.** Se implementa en **HTML**, **CSS** y **JavaScript**, con un servidor en **Node.js**.

**Objetivo**: Crear un sistema web moderno que permita cambiar el idioma del contenido y utilizar un chatbot integrado con IA.

---

# Carasterísticas
- Interfaz moderna y animaciones llamativas.
- Cambio de idioma dinámico entre Español e Inglés.
-  Chatbot basado en Gemini AI de Google.
-  Diseño inspirado en un sitio web conocido, pero con diferencias.

---

# Estructura del Proyecto
**Traduccion-de-texto**
- 📄 index.html - - - - - # Página principal con el sitio web y el chatbot.
- 📄 style.css - - - - - - -# Estilos y animaciones del sitio.
- 📄 script.js - - - - - - - # Controla la interacción y cambio de idioma.
- 📄 translations.js - - - # Diccionario de traducciones para español e inglés.
- 📄 server.js - - - - - - -# Servidor en Node.js que maneja el chatbot con Gemini AI.
- 📄 package.json- - - -# Dependencias y configuración de Node.js.
- 📄 .env - - - - - - - - - # Archivo con la API Key de Gemini AI.

---

# Procedimientos de instalacion y uso
Clonar el Repositorio:
`git clone https://github.com/Alexsanz26/Traduccion-de-texto.git
cd Traduccion-de-texto`

---

# Instalar dependencias específicas para el servidor (server.js)
El chatbot requiere las siguientes dependencias de Node.js:
`npm install express cors body-parser dotenv @google/generative-ai`

---

# Configurar la API Key de Gemini AI

Obtener una API Key desde `Google AI Studio`.
Crear el archivo `.env` en la raíz del proyecto con el siguiente contenido
   `GEMINI_API_KEY=TU_API_KEY`
   
---

# Ejecutar el Servidor
Para que inicie el servidor y que el chatbot funcione, coloque en el terminal:
`node server.js`
El servidor correra en `http://localhost:3000

---

# Abrir el Sitio Web
Lo puedes ejecutar con `index-html` en tu navegador

# Funcionamiento

### Cambio de Idioma Dinamico
- Hay un botón en la parte superior con banderas.

- **OFF = Inglés | ON = Español.**

- Usa translations.js para actualizar los textos sin recargar la página.

### Chatbot con IA (Gemini AI)

- Escribe un mensaje en el chat y presiona "Enviar".

- El servidor usa **Node.js** para conectarse con **Gemini AI**.

- El chatbot responde **en el idioma seleccionado** (español o inglés).

---

# Los hechos del Proyecto

### 1. Creacion del archivo `index.html`

- Se diseñó una estructura HTML moderna.

- Se incluyó un botón flotante para abrir el chatbot.

- Se agregó el selector de idioma con banderas.

### 2. Desarrollo del `style.css`

- Se creó un diseño atractivo y profesional.

- Se implementaron animaciones para mejorar la experiencia del usuario.

### 3. Implementación del Chatbot en `server.js`

- Se configuró **Node.js** con Express.

- Se integró la API de **Gemini AI** de Google.

- Se creó un **servidor local** que recibe preguntas y devuelve respuestas.

### 4. Creación del Sistema de Traducción `translations.js` y `script.js`

- Se usó JavaScript puro para traducir todos los textos dinámicamente.

- Se manejaron eventos para detectar el idioma y cambiar los textos.

---

# Herramientas usadas

### Frontend

- HTML (Estructura del sitio).

- CSS (Diseño y animaciones).

- JavaScript (Lógica de interacción y traducción).

### Backend

- Node.js (Servidor para manejar el chatbot).

- Express.js (Manejo de rutas y peticiones).

### Inteligencia Artificial

- Google Gemini AI (Generación de respuestas del chatbot).

---

# Funcionalidades Explicadas

### Traducción Dinámica de la Página

- Implementado con un botón ON/OFF.

- Traduce todos los textos sin recargar la página.

- Se actualizan automáticamente los contenidos con translations.js.

### Chatbot con Gemini AI

- Recibe preguntas del usuario y genera respuestas en tiempo real.

- Funciona con un servidor Node.js que se conecta a la API de Google.

- Se adapta al idioma seleccionado.

### Interfaz Moderna y Animada

- Uso de CSS Animations para transiciones suaves.

- Diseño responsive, compatible con móviles y PC.

- Botón flotante para abrir/cerrar el chatbot.
