import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

import users from "./routes/users.js";
import messages from "./routes/messages.js";

import {getMysqlConnection, initSqlDb} from "./utils/mysql.js"
import { getMongoDbConnection, initMongoDb } from "./utils/mongodb.js"

app.use(express.json());

app.use(async (req, res, next) => {
    req.mysqlConn = await getMysqlConnection()
    req.mongoDbConn = await getMongoDbConnection();
    next();
});


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// ================== ROUTES ===================

app.get("/", async (req, res) => {
    res.json({
        message: "Welcome",
        version: "1.0.0",
    });
});

// app.use("/api/orders", orders);
app.use("/api/auth", users);


app.listen(PORT, async () => {
    await initSqlDb()
    await initMongoDb()
    console.log(`Server is running on port ${PORT}...`);
});

