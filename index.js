require('dotenv').config()
const express = require('express');
const { storage } = require('./storage/storage');
const multer = require('multer');
const upload = multer({ storage });
const cors= require('cors');
const logger = require('morgan')
const errorHandler = require('./middleware/errorHandler')


const app = express();
app.use(logger('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler)



app.post('/upload', upload.single('attachment'), async(req, res) => {

  if(!req.file) {
    return res.status(400).json({success: false, message: "Please provide a valid attachment.", code: 400})
  }
  const path = req.file.path;
  if(!path) {
    return res.status(400).json({success: false, message: "Please provide a valid attachment.", code: 400})
  }

  

  return res.json({success: true, message: "Attachment successfully uploaded to cdn.", url: `${path}`, code: 200})
  
})


app.get('/status', async (req, res) => {
  res.sendStatus(200)
})
app.get('/', async (req, res) => {
  res.sendStatus(403)
});

app.get("*", async (req, res) => {
  res.status(404).send()
})

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
  console.log(`[^] Server started on ${PORT}`);
});
