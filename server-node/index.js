const express = require('express');
const cors = require('cors')
const { translate } = require('./models/api');
const { Translator } = require('./models/Translator');
const app = express();
const port = 3333;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}))

app.get('/', (req, res) => {
  return res.send('Hello World');
})

app.post('/translate', async (req, res) => {
  const textENG = req.body["text"];

  const textBR = await translate(textENG);
  
  return res.send(textBR)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
})