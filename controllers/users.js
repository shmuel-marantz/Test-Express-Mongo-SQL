import { ObjectId } from "mongodb";

export const registerUser = async (req, res) => {
    try {
        const mongoConn = req.mongoDbConn;
        const usersCollection = mongoConn.collection("users");
        const now = new Date();

        const newUser = {
            username: req.body.username,
            password: req.body.password,
            encryptedMessagesCount: 0,
            createdAt: now
        };

        const result = await usersCollection.insertOne(newUser);

        // const user = await usersCollection.findOne({ _id: result.insertedId });

        res.status(201).json({ id: result.insertedId, username: req.body.username });
    } catch (err) {
        console.error(err);
        // Handle duplicate key error (unique index violation)
        if (err.code === 11000) {
            return res.status(409).json({
                msg: "error",
                data: null,
                message: "A user with this name already exists",
            });
        }
        res.status(500).json({ msg: "error: " + err.message, data: null });
    }
};