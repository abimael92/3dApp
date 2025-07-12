import express from "express";
import modelslabRoutes from './routes/modelslab.routes.js';
import * as dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(express.json());

// Mount huggingface route
app.use('/api/v1/modelslab', modelslabRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
