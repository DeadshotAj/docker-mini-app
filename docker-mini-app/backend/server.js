const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('process.env.mongodb+srv://Aju:Leavemealone_2004@cluster0.5x7orhc.mongodb.net/?appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB Error:", err));

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));