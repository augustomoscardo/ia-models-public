const express = require('express');

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  return res.send('Hello World');
})

app.post('/translate', (req, res) => {
  return res.json({ translated_text: 'Texto traduzido' });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
})