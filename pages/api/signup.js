// pages/api/signup.js
import clientPromise from '../../utils/dbConnect';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const client = await clientPromise
            const db = client.db("users")
            const collection = db.collection("registered_user")

            const { username, email, password } = req.body;
            console.log({ username, email, password })
            // Check if the user already exists
            const insertResult = await collection.insertOne({ username, email, password })
            console.log("inserted documents => ", insertResult)

            // const existingUser = await User.findOne({ email });

            // if (existingUser) {
            //     return res.status(400).json({ error: 'User already exists' });
            // }

            // // Create a new user
            // const newUser = new User({
            //     username,
            //     email,
            //     password,
            //     // You should hash the password before saving it
            // });

            // await newUser.save();
            return res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
