const express = require('express');
const filmRoutes = require("./src/film/routes");

const app = express();
const port = 8000;

app.use(express.json());

const cors = require("cors");
app.use(cors({
	origin: '*'
}));

app.get("/", (req, res) => {
	res.send("Hello Point Park University");
});

//API Route
app.use("/api/v1/film", filmRoutes);

app.listen(port, () => console.log('running on ${port}'));

