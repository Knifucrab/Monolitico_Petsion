const express = require("express");

const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
