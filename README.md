# Zoom Clone - Plataforma de Videollamadas

Este proyecto es una clonación de la plataforma de videollamadas **Zoom**, desarrollada con tecnologías web modernas como HTML, CSS, JavaScript y Node.js. Incluye un chatbot asistente virtual con soporte multilingüe (español e inglés), animaciones CSS y un diseño responsive para dispositivos móviles y de escritorio.

---

## Características principales

- **Videollamadas HD**: Conexiones de alta calidad con video y audio claros.
- **Chat integrado**: Comparte mensajes y archivos durante las videollamadas.
- **Compartir pantalla**: Presenta documentos, aplicaciones o tu pantalla completa.
- **Pizarra virtual**: Colabora en tiempo real con una pizarra interactiva.
- **Multiplataforma**: Conéctate desde cualquier dispositivo (PC, Mac, iOS, Android).
- **Chatbot asistente**: Un asistente virtual que responde preguntas en español e inglés.
- **Diseño responsive**: Compatible con dispositivos móviles y de escritorio.
- **Animaciones CSS**: Efectos visuales modernos para una experiencia de usuario atractiva.

---

## Requisitos previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu computadora:

1. **Node.js**: Necesitarás Node.js para ejecutar el servidor backend. Puedes descargarlo desde [aquí](https://nodejs.org/). Asegúrate de instalar la versión LTS (Long Term Support).
2. **Editor de código**: Recomendamos usar [Visual Studio Code](https://code.visualstudio.com/), pero puedes usar cualquier editor de texto que prefieras.
3. **Navegador web**: Cualquier navegador moderno como Google Chrome, Firefox o Edge.
---
## Pasos para configurar y ejecutar el proyecto

Sigue estos pasos detallados para clonar, configurar y ejecutar el proyecto en tu computadora.

### 1. Clona el repositorio

Primero, abre una terminal en tu computadora y clona el repositorio desde GitHub:

git clone https://github.com/Alexsanz26/zoom-clone.git

Esto descargará todos los archivos del proyecto en una carpeta llamada zoom-clone.

### 2. Navega a la carpeta del proyecto
Una vez que hayas clonado el repositorio, ingresa a la carpeta del proyecto:

`cd zoom-clone`

###3. Instala las dependencias
El proyecto utiliza Node.js y algunas librerías externas. Para instalarlas, ejecuta el siguiente comando:

`npm install`

Esto instalará todas las dependencias necesarias, como express, cors, body-parser y @google/generative-ai.

`npm install express cors body-parser  @google/generative-ai.`

###4. Configura el archivo .env
El proyecto utiliza un archivo .env para almacenar la clave de API de Google Generative AI (Gemini). Sigue estos pasos:

1. Crea un archivo llamado .env en la raíz del proyecto (junto a server.js).

2. Abre el archivo .env y agrega la siguiente línea:

`.env`
` GEMINI_API_KEY=tu_api_key_aquí`

####Nota: Si no tienes una API Key de Google Generative AI, puedes obtener una desde Google Cloud Console. Si no deseas usar la API, el chatbot funcionará con respuestas predefinidas.

###5. Ejecuta el servidor
Una vez que hayas configurado el archivo .env, puedes iniciar el servidor backend con el siguiente comando:

`npm server.js`

Verás un mensaje en la terminal que dice:

`✅ Server running at http://localhost:3000`
`🤖 Chatbot ready to respond in multiple languages`

Esto significa que el servidor está funcionando correctamente.

###6. Abre el proyecto en tu navegador
Ahora que el servidor está en funcionamiento, abre el archivo index.html en tu navegador. Puedes hacerlo de dos maneras:

1. Abrir directamente el archivo: Navega a la carpeta del proyecto y haz doble clic en index.html.

2. Usar el servidor local: Si prefieres, puedes visitar http://localhost:3000 en tu navegador.
---
###Estructura del proyecto
Aquí tienes una descripción de los archivos y carpetas principales del proyecto:

`index.html`: La página principal del sitio web. Contiene la estructura HTML y los elementos de la interfaz de usuario.

`style.css`: Los estilos CSS que dan vida al diseño del sitio, incluyendo animaciones y efectos visuales.

`script.js`: La lógica del frontend, incluyendo el chatbot, el selector de idioma y las interacciones del usuario.

`translations.js`: Un archivo que contiene las traducciones en español e inglés para soporte multilingüe.

`server.js`: El servidor backend en Node.js que maneja las respuestas del chatbot.

`package.json`: Un archivo que contiene las dependencias del proyecto y scripts útiles.

---
###Cómo usar el chatbot
El chatbot está diseñado para responder preguntas comunes sobre la plataforma. Puedes interactuar con él de la siguiente manera:

1. Haz clic en el botón de chat en la esquina inferior derecha de la pantalla.

2. Escribe tu pregunta en el cuadro de texto y presiona Enter o haz clic en el botón de enviar (📩).

3. El chatbot responderá en el idioma seleccionado (español o inglés).

**Ejemplos de preguntas que puedes hacer:**

- ¿Qué planes de precios tienen?

- ¿Cómo funciona la seguridad en Zoom?

- ¿Puedo compartir mi pantalla?

---

###Cambiar el idioma
El proyecto soporta dos idiomas: **español** e **inglés**. Para cambiar el idioma:

1. Haz clic en el botón de idioma en la esquina superior derecha de la pantalla.

2. Selecciona el idioma que prefieras (Español o English).

3. La interfaz y el chatbot se actualizarán automáticamente al idioma seleccionado.




---
###Solución de problemas
Si encuentras algún problema al ejecutar el proyecto, aquí tienes algunas soluciones comunes:

1. **Error al iniciar el servidor:**

 - Asegúrate de que Node.js esté instalado correctamente.

  - Verifica que el archivo `.env` contenga la clave de API correcta.

  - Si no tienes una API Key, el chatbot funcionará con respuestas predefinidas.

2. **El chatbot no responde:**

  - Asegúrate de que el servidor esté en funcionamiento (`node server.js`).

  - Verifica que no haya errores en la consola del navegador (presiona `F12` y revisa la pestaña "Console").

3. **Problemas con el diseño:**

  - Asegúrate de que el archivo style.css esté correctamente vinculado en index.html.

  - Si estás en un dispositivo móvil, verifica que el diseño sea responsive.
