const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json());

// Utility to read data
const readData = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading data file:", err);
        return { cart: [], wishlist: [], reviews: [], commissions: [] };
    }
};

// Utility to write data
const writeData = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error("Error writing data file:", err);
    }
};

// GET all data
app.get('/api/data', (req, res) => {
    const data = readData();
    res.json(data);
});

// POST update cart
app.post('/api/cart', (req, res) => {
    const data = readData();
    data.cart = req.body;
    writeData(data);
    res.json({ success: true, cart: data.cart });
});

// POST update wishlist
app.post('/api/wishlist', (req, res) => {
    const data = readData();
    data.wishlist = req.body;
    writeData(data);
    res.json({ success: true, wishlist: data.wishlist });
});

// POST add review
app.post('/api/reviews', (req, res) => {
    const data = readData();
    data.reviews.unshift(req.body); // Add to beginning
    writeData(data);
    res.json({ success: true, reviews: data.reviews });
});

// POST add commission
app.post('/api/commissions', (req, res) => {
    const data = readData();
    const newCommission = {
        ...req.body,
        id: `com-${Date.now()}`,
        date: new Date().toISOString()
    };
    data.commissions.push(newCommission);
    writeData(data);
    res.json({ success: true, commission: newCommission });
});

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
