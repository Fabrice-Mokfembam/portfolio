# Portfolio Website - Mokfembam Fabrice

A modern, professional portfolio website built with React, TypeScript, and Vite.

## Features

- 🎨 Modern dark theme with glassmorphism effects
- 📱 Fully responsive design
- ⚡ Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 🚀 Fast and optimized performance

## EmailJS Setup

To enable the contact form to send emails, you need to set up EmailJS:

1. **Sign up for EmailJS**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account

2. **Create an Email Service**:
   - Go to Email Services and add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions for your email provider
   - Copy your Service ID

3. **Create an Email Template**:
   - Go to Email Templates and create a new template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Sender's phone
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Set the recipient email to: `fabricemokfembam@gmail.com`
   - Copy your Template ID

4. **Get your Public Key**:
   - Go to Account > API Keys
   - Copy your Public Key

5. **Create Environment Variables**:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

6. **Restart your development server** after adding the environment variables

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
