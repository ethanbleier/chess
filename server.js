const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'doc.html'));
});

// Start the server
app.listen(port, () => {
	console.log(`chess is running on ${port}`);
});
