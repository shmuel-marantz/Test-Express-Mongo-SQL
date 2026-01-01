export const encryptMessage = async (req, res) => {

    const { username } = req.body;
    const { password } = req.body;
    if (!username || !password)
        return res.status(400).json({ success: false, message: "Enter your full details" })

    const mongoConn = req.mongoDbConn;
    const usersCollection = mongoConn.collection("users");

    const user = await usersCollection.findOne({ username: username });
    if (!user) {
        return res.status(404).json({ success: false, message: "You are not registered" });

        if (user.password !== password)
            return res.status(400).json({ success: false, message: "Incorrect password" });

            const now = new Date();

const encryptedText = req.body.message

            const newMessage = {}

    }