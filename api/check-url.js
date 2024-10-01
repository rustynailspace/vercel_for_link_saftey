const express = require("express");
const cors = require("cors"); // Import the CORS package
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post("/check-url", async (req, res) => {
    const { url } = req.body;
    try {
        const response = await axios.post(
            "https://www.virustotal.com/vtapi/v2/url/report",
            null,
            {
                params: {
                    apikey: "73e41c99-3f41-4a25-9d99-3893966c5e45", // Replace with your VirusTotal API key
                    resource: url,
                },
            },
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error checking the URL." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.post("/check-url", async (req, res) => {
    const { url } = req.body;
    try {
        const response = await axios.post(
            "https://www.virustotal.com/vtapi/v2/url/report",
            null,
            {
                params: {
                    apikey: "73e41c99-3f41-4a25-9d99-3893966c5e45", // Your API key
                    resource: url,
                },
            },
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error checking the URL." });
    }
});
