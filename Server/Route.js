const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

let listings = [
    { id: 1, title: "Entire house", location: "Durban", price: 8500, image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-684763757047711680/original/5d64a8c3-edd1-46f8-9388-8807c2461db2.jpeg?im_w=720" },
    { id: 2, title: "Entire house", location: "Pretoria", price: 10000, image: "https://a0.muscache.com/im/pictures/monet/Luxury-684775187359347079/original/22a46210-3257-4081-af3a-cddbefe28396?im_w=720" },
    { id: 3, title: "Entire house", location: "Johannesburg", price: 15000, image: "https://a0.muscache.com/im/pictures/monet/Luxury-684775187359347079/original/22a46210-3257-4081-af3a-cddbefe28396?im_w=720" },
    { id: 4, title: "Entire house", location: "Port Elizabeth", price: 7000, image: "https://a0.muscache.com/im/pictures/monet/Luxury-684775187359347079/original/22a46210-3257-4081-af3a-cddbefe28396?im_w=720" },
    { id: 5, title: "Entire house", location: "Cape Town", price: 7000, image: "https://a0.muscache.com/im/pictures/monet/Luxury-684775187359347079/original/22a46210-3257-4081-af3a-cddbefe28396?im_w=720" },
];

// GET: Retrieve all listings
router.get('/listings', (req, res) => {
    res.json(listings);
});

// POST: Create a new listing
router.post('/listings', (req, res) => {
    const { title, location, price, image } = req.body;

    // Check if title, location, price, and image are provided
    if (!title || !location || !price || !image) {
        return res.status(400).json({ message: "Title, location, price, and image are required." });
    }

    // Create a new listing object
    const newListing = {
        id: listings.length + 1, // Assign a new id based on the current length of listings
        title,
        location,
        price,
        image
    };

    // Add the new listing to the listings array
    listings.push(newListing);

    // Respond with the created listing and a 201 status code
    res.status(201).json(newListing);
});

// PUT: Update an existing listing
router.put('/listings/:id', (req, res) => {
    const { id } = req.params;
    const { title, location, price, image } = req.body;
    const listing = listings.find(l => l.id === parseInt(id));

    if (!listing) {
        return res.status(404).json({ message: "Listing not found" });
    }

    listing.title = title || listing.title;
    listing.location = location || listing.location;
    listing.price = price || listing.price;
    listing.image = image || listing.image;

    res.json(listing);
});

// DELETE: Remove a listing
router.delete('/listings/:id', (req, res) => {
    const { id } = req.params;
    const index = listings.findIndex(l => l.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Listing not found" });
    }

    listings.splice(index, 1);
    res.status(204).send(); // No content to send back
});

module.exports = router;
