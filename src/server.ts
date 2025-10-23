import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/database";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
