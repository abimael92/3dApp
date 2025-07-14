import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const { MODEL_ID, MODELSLAB_API_KEY } = process.env;

console.log("MODELSLAB_API_KEY:", MODELSLAB_API_KEY);


router.post('/', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    try {
        const response = await fetch('https://modelslab.com/api/v6/images/text2img', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                key: MODELSLAB_API_KEY,
                model_id: MODEL_ID || 'v7',
                prompt,
            }),
        });

        const data = await response.json().catch(() => null);

        if (!response.ok || !data || data.status === 'error') {
            const message = data?.message || data?.error || 'A server error occurred. Please try again later.';
            return res.status(response.status || 500).json({ status: 'error', message });
        }

        res.status(200).json(data);


    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Modelslab API error' });
    }
});

export default router;
