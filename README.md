# Customizable T-Shirt Page

The Customizable T-Shirt Page is an interactive web application that empowers users to design their own unique t-shirts by customizing various aspects, including colors, logos, and textures. Leveraging the power of OpenAI API, users can upload or generate custom logos and textures, which they can then apply to their t-shirts. The project utilizes modern web technologies like React, Three.js, and Tailwind CSS to provide an engaging and user-friendly experience.

![Customizable T-Shirt Page Preview](/3dApp/client/public/preview.png)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Configuration](#configuration)
- [Features](#features)
- [Documentation](#documentation)
- [FAQs](#faqs)

## Tech Stack

- **Frontend**: The frontend of the project is built using React to manage the UI components and application state efficiently.

- **3D Visualization**: Three.js is used to create the interactive 3D preview of the t-shirt, enabling real-time rendering and rotation.

- **Custom Logo and Texture Generation**: The OpenAI API is integrated into the project to generate unique logos and textures for users' customizations.

- **Styling**: Tailwind CSS provides a utility-first approach to styling, making it easy to create a responsive and visually appealing design.

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/3dApp.git
```

2. Navigate to the project directory:

```bash
cd 3dApp
```

3. Install dependencies for the client and server:

- For the client:

```bash
cd client
npm install
```

- For the server:

```bash
cd ../server
npm install
```

4. Set up environment variables:

Create a .env file in the server directory:

```bash
PORT=5000
OPENAI_API_KEY=your-openai-api-key
```

\*\*Replace your-openai-api-key with your actual OpenAI API key.

5. Run the client and server:

Open two terminal windows.

In the first terminal, start the client:

```bash
cd client
npm run dev
```

In the second terminal, start the server:

```bash
cd server
npm start
```

6. Access the application:

The client will run on http://localhost:3000.
The server will run on http://localhost:5000.

## Usage

The Customizable T-Shirt Page offers a user-friendly interface to design and customize t-shirts with various options. Below, we explain how to use the project, providing code examples and screenshots for reference.

## Command-line Usage:

As the Customizable T-Shirt Page is a web application, there is no command-line usage for this project. To run the project, you need to start the development server using the provided npm scripts:

## Install Dependencies:

Open a terminal or command prompt in the project's root directory and run the following command to install project dependencies:

```bash
npm install
```

Start the Development Server:

```bash
npm run dev
```

The server will start, and you can access the Customizable T-Shirt Page in your web browser at http://localhost:3000.

## API Usage:

The Customizable T-Shirt Page integrates with the OpenAI and Cloudinary APIs for custom logo and texture generation and image uploads, respectively. To interact with these APIs, the frontend communicates with the backend server using HTTP requests.

Code Example: Generating Custom Logos and Textures using OpenAI API

```bash

import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'hello' })
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = response.data.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        if (error.response) {
            console.log(`Status Code: ${error.response.status}\nResponse Data: ${JSON.stringify(error.response.data, null, 2)}`);
        } else {
            console.log(error.message);
        }
        res.status(500).json({ message: "Something went wrong" })
    }
})

export default router;
```

## Configuration

Setting Up Environment Variables and API Keys:

- OpenAI API Key:

1. Sign up for an account on https://platform.openai.com/.

2. Once logged in, navigate to the "API Keys" section in your dashboard.

3. Click on the "Create New Key" button to generate an API key for the DALL·E API.

4. Copy the API key and save it securely.

- Environment Variables:

In the root directory of the project, create a new file named .env.

Add the following lines to the .env file:

dotenv

```bash
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

Replace YOUR_OPENAI_API_KEY with the API key obtained from OpenAI.

## Features

- **Customization Options:** Users can choose from a wide range of customization options, such as t-shirt color, sleeve length, collar style, and more.

- **Custom Logos and Textures:** By integrating the OpenAI API, users can either upload their logos and textures or generate unique ones using AI algorithms.

- **Interactive 3D Preview:** The page offers an interactive 3D preview of the customized t-shirt, allowing users to view and rotate the design from different angles.

- **Real-Time Updates:** As users make changes to their t-shirt design, the 3D preview updates in real-time, providing instant visual feedback.

- **Responsive Design:** The page is fully responsive, making it accessible across various devices and screen sizes.

- **Tailwind CSS Styling:** The project adopts the Tailwind CSS framework to achieve a clean and modern UI with minimal effort.

<!-- - **Export and Share**: Users have the option to export their final t-shirt design as an image or share it on social media. -->

## Documentation

- API documentation: https://platform.openai.com/docs/introduction/overview

## FAQs

- Q1: What does this project do?

- A1: This project is a customized 3D T-shirt website app that utilizes texture and logo designs with the help of an AI API from DALL-e. The main functionality of this app is to allow users to create personalized 3D T-shirt designs by uploading their own images and integrating them with the available texture and logo options. The AI API from DALL-e enhances the creative possibilities by generating unique and artistic designs based on user input. Users can choose from a variety of textures, add logos, and experiment with different combinations until they find the perfect customized T-shirt design. The app aims to provide an enjoyable and interactive experience for users looking to express their individuality through creative apparel designs.
