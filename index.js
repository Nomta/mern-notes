const config = require('config');
const mongoose = require('mongoose');
const app = require('./app');

const PORT = config.get('port') || 7000;

async function start() {
    try {
        await mongoose.connect(config.get('mongodb').uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        app.listen(PORT, () => {
          console.log(`App has been running on http://localhost:${PORT}`)
        });
    } 
    catch(err) {
        console.error('Server error', err.message);
        process.exit(1);
    }
}

start();