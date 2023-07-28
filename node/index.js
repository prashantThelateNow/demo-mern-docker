const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: "POST, PUT, GET",
};
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handler for unhandled promise rejections
process.on("unhandledRejection", (err) => {
  logger.error(`Error: ${err}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
