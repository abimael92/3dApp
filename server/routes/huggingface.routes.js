import express from "express";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

router.post("/", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({ error: errorData });
        }

        // Hugging Face returns the image as binary data
        const arrayBuffer = await response.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        const imageDataUrl = `data:image/png;base64,${base64}`;

        res.status(200).json({ image: imageDataUrl });
    } catch (error) {
        console.error("Hugging Face API error:", error);
        res.status(500).json({ error: "Hugging Face API error" });
    }
});

export default router;
