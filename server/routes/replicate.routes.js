// server/routes/replicate.routes.js
import express from "express";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
const MODEL_VERSION_ID = process.env.MODEL_VERSION_ID; // Replace with actual model version ID

router.post("/", async (req, res) => {
    try {
        if (!REPLICATE_API_TOKEN) {
            return res.status(500).json({ error: "Missing Replicate API token" });
        }

        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await fetch("https://api.replicate.com/v1/predictions", {
            method: "POST",
            headers: {
                Authorization: `Token ${REPLICATE_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                version: MODEL_VERSION_ID,
                input: { prompt },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({ error: errorData });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.error("Replicate API error:", err);
        res.status(500).json({ error: "Replicate API error" });
    }
});

export default router;
