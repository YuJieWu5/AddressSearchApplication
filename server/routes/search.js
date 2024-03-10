const express = require('express');
const router = express.Router();
const searchService = require('./searchService');

router.post('/search', async (req, res) => {
    const { selectedCountries, userInput, page } = req.body;

    try {
        const searchResults = await searchService.performSearch(selectedCountries, userInput, page);
        res.json(searchResults);
    } catch (error) {
        console.error('Error performing search:', error);
        res.status(500).json({ error: 'An error occurred while performing the search' });
    }
});

module.exports = router;
