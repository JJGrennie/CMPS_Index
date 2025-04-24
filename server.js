const express = require('express');
const helmet = require("helmet");
const filmRoutes = require("./src/film/routes");

const app = express();
const port = 5001;

app.use(express.json());
app.use(helmet());

const cors = require("cors");
app.use(cors({
	origin: '*'
}));

app.get("/", (req, res) => {
	res.send("Hello Point Park University");
});

//API Route
app.use("/api/v1/film", filmRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));

