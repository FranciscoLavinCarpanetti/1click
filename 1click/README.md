# Plan de Incentivos 1CLICK – 1CLICK2GO BANK

¡Bienvenido al proyecto **Plan de Incentivos 1CLICK**! Este es un sitio web desarrollado en Angular y Tailwind CSS para presentar el sistema de incentivos de 1CLICK2GO BANK, orientado a la captación y fidelización de clientes de alto valor.

## 🚀 Descripción

Esta aplicación web muestra de manera clara y atractiva las modalidades de incentivos, condiciones, consideraciones adicionales y permite a los usuarios descargar el plan completo en PDF o suscribirse a un boletín de novedades.

## 🏗️ Estructura del Proyecto

- **Angular**: Framework principal para la construcción de la SPA (Single Page Application).
- **Tailwind CSS**: Utilizado para el diseño responsivo y moderno de la interfaz.
- **Animaciones personalizadas**: Para mejorar la experiencia de usuario.
- **Descarga de PDF**: Simulación de descarga del plan de incentivos.
- **Newsletter**: Formulario de suscripción simulado.

### Archivos y Carpetas Principales

- `src/main.ts`: Componente principal con toda la lógica y la plantilla de la aplicación.
- `src/global_styles.css`: Estilos globales y utilidades personalizadas.
- `src/index.html`: HTML base de la aplicación.
- `tailwind.config.js`: Configuración de Tailwind CSS con paleta de colores personalizada.
- `postcss.config.js`: Configuración de PostCSS para Tailwind y autoprefixer.
- `angular.json`, `tsconfig.json`: Configuración de Angular y TypeScript.

## 🖥️ Tecnologías Utilizadas

- [Angular](https://angular.io/) 16+
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/)

## 📦 Instalación y Ejecución

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd 1click
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Ejecuta la aplicación en modo desarrollo:**
   ```bash
   npm start
   # o
   ng serve
   ```
4. **Abre tu navegador en:**
   [http://localhost:4200](http://localhost:4200)

## 📝 Funcionalidades Principales

- **Sección Hero:** Presentación del plan y acceso rápido a la descarga del PDF.
- **Objetivo General:** Explicación clara del propósito del sistema de incentivos.
- **Modalidades de Incentivos:** Tarjetas interactivas para cada tipo de colaborador.
- **Consideraciones Adicionales:** FAQs animadas y desplegables.
- **Newsletter:** Formulario para suscribirse a novedades (simulado).
- **Animaciones al hacer scroll:** Mejora visual y experiencia de usuario.

## 🎨 Personalización

- Los colores y fuentes están definidos en `tailwind.config.js` y `global_styles.css`.
- Puedes modificar los textos y condiciones de incentivos en el array `incentiveCards` dentro de `src/main.ts`.

## 📄 Descarga de PDF

El botón "Descargar Plan Completo" simula la descarga de un PDF con información básica. Puedes reemplazar el enlace base64 en `downloadPDF()` por un archivo real si lo deseas.

## 📬 Contacto

- Email: incentivos@1click2gobank.com
- Teléfono: +34 900 000 000
- Ubicación: Madrid, España

## 🛡️ Licencia

Este proyecto es solo para fines demostrativos y no debe considerarse como una oferta real de productos bancarios.

---

¡Gracias por visitar el Plan de Incentivos 1CLICK! Si tienes sugerencias o deseas contribuir, no dudes en abrir un issue o pull request. 