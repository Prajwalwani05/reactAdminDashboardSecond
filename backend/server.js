// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs'); // Import fs module

const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: '*', // Allow all origins for testing
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
  app.use(express.json());
  app.use('/uploads', express.static('uploads'));
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/adminDashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Schema and Model
const traderSchema = new mongoose.Schema({
    id: String,  // Use String if you're using a random string as ID
    name: String,
    age: Number,
    joinDate: Date,
    role: String
  });
  const fileSchema = new mongoose.Schema({
    originalName: String,
    filename: String,
    mimetype: String,
    size: Number,
  });

const File = mongoose.model('File', fileSchema, 'Files');
const Trader = mongoose.model('Trader', traderSchema, 'Trader'); // Explicitly name the collection

// Multer Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});



const upload = multer({ storage });
app.get('/files', async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Received file:', req.file);
  console.log('Request body:', req.body);

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { originalname, filename, mimetype, size } = req.file;

  const newFile = new File({
    originalName: originalname,
    filename,
    mimetype,
    size,
  });

  newFile.save()
    .then(() => res.status(200).json({ message: 'File uploaded successfully' }))
    .catch((error) => {
      console.error('Error saving file:', error);
      res.status(500).json({ message: 'Error saving file', error });
    });
});

app.delete('/files/:filename', async (req, res) => {
  debugger;
  const { filename } = req.params;

  try {
    // Assuming you store files in a directory
    const filePath = path.join(__dirname, 'uploads', filename);

    // Delete file from filesystem
    fs.unlinkSync(filePath);

    // Delete file record from database
    await File.deleteOne({ filename });

    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ error: 'Failed to delete file' });
  }
});


// POST endpoint to add a new trader
app.post('/traders', async (req, res) => {
    console.log('Received data:', req.body); // Log incoming data
    const newTrader = new Trader(req.body);
    try {
      const savedTrader = await newTrader.save();
      res.status(201).json(savedTrader);
    } catch (error) {
      console.error('Error adding trader:', error);
      res.status(400).json({ message: 'Error adding trader', error });
    }
  });
  
  

// PUT endpoint to update an existing trader
app.put('/traders/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, joinDate, role } = req.body;

    // Convert joinDate to Date object if it's a string
    const parsedJoinDate = new Date(joinDate);

    try {
      const updatedTrader = await Trader.findByIdAndUpdate(id, {
        name,
        age,
        joinDate: parsedJoinDate,
        role
      }, { new: true });
      
      if (!updatedTrader) {
        return res.status(404).send('Trader not found');
      }
      
      res.send(updatedTrader);
    } catch (error) {
      res.status(400).send(error);
    }
});

// Routes
app.get('/traders', async (req, res) => {
  try {
    const traders = await Trader.find();
    res.json(traders);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
