require('dotenv').config();

const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const filmRoutes = require("./src/film/routes");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(helmet());

app.use(cors({
	origin: '*'
}));

app.get("/", (req, res) => {
	res.send("Hello Point Park University");
});

// API Route
app.use("/api/v1/film", filmRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));

