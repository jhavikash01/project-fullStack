// const mongoose = require('mongoose');
// require('dotenv').config();

// const userModel = require('./routes/users');
//  // Adjust the path accordingly

// // Connect to your MongoDB database
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Remove salt and hash fields from all user documents
//     return userModel.updateMany({}, { $unset: { salt: "", hash: "" } });
//   })
//   .then(result => {
//     console.log('Removed salt and hash fields:', result);
//     mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB or updating documents:', err);
//     mongoose.disconnect();
//   });
