const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// routes
const petRoutes = require("./routes/pets");
app.use("/api/pets", petRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});