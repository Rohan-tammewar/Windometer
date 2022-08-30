"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winddata_1 = __importDefault(require("./routes/winddata"));
const districtdata_1 = __importDefault(require("./routes/districtdata"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const cors = require('cors');
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use(cors({ origin: true }));
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.use("/winddata", winddata_1.default);
app.use("/districtdata", districtdata_1.default);
config_1.default
    .sync()
    .then(() => {
    console.log("Database successfully connected");
})
    .catch((err) => {
    console.log("Error", err);
});
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
