const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
require('./db/connection');
const feedbacks = require('./Models/feedback');
const signups = require('./Models/Signup');

app.post("/",async(req,res)=>{
    let feedback=new Feedbacks(req.body);
    let result = await feedback.save();
    res.send(result);
})

app.get("/admin/home",async (req,res)=>{
    await feedbacks.find({})
    .then(Feedback => res.json(Feedback))
    .catch(err => res.json(err))
})
app.post("/signup",async(req,res)=>{
    let signup=new signups(req.body);
    let result = await signup.save();
    res.send(result);
})
// app.post("/signup", async (req, res) => {
//     const { email, password, confirmPassword, firstname, lastname, phonenumber } = req.body;
  
//     // Validate passwords match
//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match" });
//     }
  
//     try {
//       // Check if the user already exists
//       const existingUser = await User.findOne({ email });
  
//       if (existingUser) {
//         return res.status(409).json({ message: "User already exists" });
//       }
  
//       // Create a new user document
//       const newUser = new User({ email, password, firstname, lastname, phonenumber });
//       // Save the user document to the database
//       await newUser.save();
//       res.status(201).json({ message: "Signup successful" });
//     } catch (error) {
//       console.error("Error creating user:", error);
//       res.status(500).json({ message: "Signup failed" });
//     }
//   });
  
  
//   app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       // Find the user in the database
//       const user = await User.findOne({ email });
  
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
  
//       // Check if the password is correct
//       if (user.password !== password) {
//         return res.status(401).json({ message: "Incorrect password" });
//       }
  
//       // Login successful
//       res.status(200).json({ message: "Login successful" });
//     } catch (error) {
//       console.error("Error logging in:", error);
//       res.status(500).json({ message: "Login failed" });
//     }
//   });
  
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await signups.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        res.status(200).json({ message: "Login successful" , result });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Login failed" });
    }
});
app.post("/signup", async (req, res) => {
    const { firstname, lastname, email, password, phonenumber } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await signups.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the user with the hashed password
        const signup = new signups({ firstname, lastname, email, password: hashedPassword, phonenumber });
        const result = await signup.save();
        res.status(201).json({ message: "Signup successful", result });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Signup failed" });
    }
});

app.listen(4000, () => console.log("Server running on port 4000"));

app.listen(4000,()=>{
    console.log("server is running at port no 4000...");
})