const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(path.join(__dirname, 'client/public')));
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'client/views') });
});

app.get('/feed', (req, res) => {
    res.sendFile('feed.html', { root: path.join(__dirname, 'client/views') });
});

// API endpoints
const feedRoutes = require('./routes/feedRoutes'); // Ensure the path matches your project structure
app.use('/api', feedRoutes);

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Listening on port 1337`));
