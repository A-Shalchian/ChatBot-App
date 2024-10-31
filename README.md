# ChatGPT-Powered Chatbot App

This is a simple, client-side chatbot app built with Next.js, TypeScript, and Tailwind CSS, utilizing the OpenAI API to provide chatbot responses. Users can enter their own API keys for personalized usage.

## Features

- Chat interface built with Next.js and TypeScript
- Responsive design styled with Tailwind CSS
- User-provided OpenAI API key input for authentication
- API route handling with OpenAI integration

## Technologies Used

- **Next.js**: Framework for building React applications
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling and responsive design
- **OpenAI API**: For AI-powered chatbot functionality

## Project Structure

src/app/apikey/page.tsx // Page for entering and saving user API key
page.tsx // Main home page
components/ChatBox.tsx // Chat component for interaction
components/Navbar.tsx // Navigation component
pages/api/chat.tsx // API route for handling OpenAI API requests

## Getting Started

### Prerequisites

- Node.js installed
- An OpenAI account with an API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/A-Shalchian/ChatBot-App.git
   cd repository-name
   ```

### Intall dependencies

2. npm install

### Set up environment variables

3. Create a .env.local file in the root directory and add your OpenAI API key (optional for local testing):
   OPENAI_API_KEY=your-openai-api-key

### Running the App

To start the development server, run:
npm run dev

Open your browser and go to http://localhost:3000 to view the app.

### Usage

Navigate to /apikey to input and save your OpenAI API key. The key is stored in localStorage for personal use.

Return to the home page and start chatting with the chatbot.

### Deployment

If you really wanted to deploy the app on a platform like vercel, follow these steps

1. Install the Vercel CLI:
   npm install -g vercel

2. Deploy the app:
   vercel

License
This project is licensed under the MIT License. See the LICENSE file for details.
