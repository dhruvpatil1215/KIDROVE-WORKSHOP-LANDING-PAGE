const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// ==========================================
// IN-MEMORY STORAGE (stores data while server is running)
// ==========================================
const enquiries = [];

// ==========================================
// MONGODB INTEGRATION (Optional but Preferred)
// ==========================================
const MONGO_URI = process.env.MONGO_URI || '';

let Enquiry; // Mongoose Model

if (MONGO_URI) {
  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('✅ Connected to MongoDB successfully.');
      
      const enquirySchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
      });
      
      Enquiry = mongoose.model('Enquiry', enquirySchema);
    })
    .catch(err => console.error('❌ MongoDB connection error:', err));
} else {
  console.log('⚠️ No MONGO_URI provided. Running in memory-only mode.');
}

// ==========================================
// ROUTES
// ==========================================

// Root endpoint test
app.get('/', (req, res) => {
  res.json({ message: "API Working" });
});

// ==========================================
// GET /api/enquiries — View all submitted registrations
// ==========================================
// Open http://localhost:5000/api/enquiries in your browser to see all data!
app.get('/api/enquiries', async (req, res) => {
  try {
    // If MongoDB is connected, fetch from database
    if (Enquiry) {
      const dbEnquiries = await Enquiry.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        source: 'MongoDB',
        count: dbEnquiries.length,
        data: dbEnquiries
      });
    }

    // Otherwise, return from in-memory array
    return res.status(200).json({
      success: true,
      source: 'In-Memory',
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return res.status(500).json({ success: false, message: 'Error fetching data' });
  }
});

// ==========================================
// POST /api/enquiry — Submit a new registration
// ==========================================
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone } = req.body;

  // Validation
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  try {
    // If DB is connected, save to MongoDB
    if (Enquiry) {
      const newEnquiry = new Enquiry({ name, email, phone });
      await newEnquiry.save();
      console.log('💾 Enquiry saved to MongoDB:', { name, email, phone });
    } else {
      // Save to in-memory array + log to terminal
      const entry = {
        id: enquiries.length + 1,
        name,
        email,
        phone,
        createdAt: new Date().toISOString()
      };
      enquiries.push(entry);
      console.log('📝 New Enquiry saved to memory:', entry);
    }

    return res.status(200).json({
      success: true,
      message: 'Registration submitted successfully'
    });
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while submitting registration'
    });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📋 View all submissions at: http://localhost:${PORT}/api/enquiries`);
});
