const mongoose = require('mongoose');
const URI = "mongodb+srv://Vinutha:481216@cluster0.a92rn0p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URI).then(()=>{
    console.log('Connected to database');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});