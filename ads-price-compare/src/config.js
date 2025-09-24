// const mongoose = require('mongoose');
// const connect = mongoose.connect("mongodb://localhost:27017/ausdietsupp");

// // Check database connected or not
// connect.then(() => {
//     console.log("Database Connected Successfully");
// })
// .catch(() => {
//     console.log("Database cannot be Connected");
// })

// // Create Schema
// const Loginschema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     name: {
//         type:String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// // collection part
// const collection = new mongoose.model("users", Loginschema);

// module.exports = collection;


// require("dotenv").config();
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ Database Connected Successfully"))
// .catch(err => console.error("❌ Database connection error:", err));

// const Loginschema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// const User = mongoose.model("User", Loginschema, "users");

// module.exports = User;



require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Database Connected Successfully"))
.catch(err => console.error("❌ Database connection error:", err));

const Loginschema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  // used to validate/rotate refresh tokens
  refreshTokenId: { type: String, default: null }
});

const User = mongoose.model("User", Loginschema, "users");
module.exports = User;
