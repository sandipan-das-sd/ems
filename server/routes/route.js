// Import necessary modules and dependencies
import express from 'express';
import { deleteUser, getUsers, getUsersData, updateUsers } from '../controller/user-controller.js';
import multer from 'multer';
import fs from 'fs';
import User from '../schema/user-schema.js';

// Create an Express router
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the destination folder for file uploads
        const uploadFolder = 'staffdetails uploads';

        // Check if the 'staffdetails uploads' folder exists, create it if not
        if (!fs.existsSync(uploadFolder)) {
            fs.mkdirSync(uploadFolder);
        }

        cb(null, uploadFolder);
    },

});

// Initialize multer with the configured storage
const upload = multer({ storage: storage });

// Define a route for adding a new user with file upload
router.post('/add', upload.single('image'), async (req, res) => {
    // Create a new User instance from the User schema
    const user = new User();
    // Set user properties from the request body and uploaded file
    user.cname = req.body.cname;
    user.mobile = req.body.mobile;
    user.mail = req.body.mail;
    user.dob = req.body.dob;
    user.doj = req.body.doj;
    user.gender = req.body.gender;
    user.rel = req.body.rel;
    user.address = req.body.address;
    user.adate = req.body.adate;
    user.dept = req.body.dept;
    user.empid = req.body.empid;
    user.image = req.file.originalname;

    // Save the user to the database
    user.save();

    // Respond with a success message
    res.status(201).json('success');
});

// Get all users - HTTP GET request
router.get('/all', getUsers);

// Get user data - HTTP POST request
router.post('/getUser', getUsersData);

// Update user information - HTTP POST request
router.post('/updateUser', updateUsers);

// Delete user - HTTP POST request
router.post('/deleteUser', deleteUser);

// Export the router for use in other parts of the application
export default router;
