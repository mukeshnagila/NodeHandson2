
const express = require("express");

const app = express();

const NavRoutes = require("./Route/NavRoutes");
app.use("/Api/Main",NavRoutes);

app.listen(5000, () => {
    try{
        console.log("server is running from port : 5000")
    }
    catch (err) {
        console.log("error in starting the live server", err)
    }
})