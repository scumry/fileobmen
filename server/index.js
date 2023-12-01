const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");

const app = express();
const PORT = config.get('serverPort');

const url = 'mongodb+srv://yumi:di10Ma13+4@cloud1.grvnuoc.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB!');

    app.listen(PORT, () => {
      console.log('Сервер запущен на порту ', PORT);
    });
  } catch (e) {
    console.error('Failed to connect to MongoDB:', e);
  }
};

start();