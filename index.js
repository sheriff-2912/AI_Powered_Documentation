const express = require('express');
const app = express();

// log requests to confirm which file is serving traffic
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    console.log('Root route handler called');
    res.send('Welcome to Sample Backend API - AI Assisted Workflows');
});

if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    });
}

module.exports = app;
