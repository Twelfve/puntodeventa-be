require("dotenv").config();
import Server from "./models/server.model";

// Server init
const server = new Server();
server.startServer();