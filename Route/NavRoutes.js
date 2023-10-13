const NavRoutes = require("express").Router();

NavRoutes.get("/express", (req,res) => {
    res.send("<h2>What is Express..?</h2></br> <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>")
})
NavRoutes.get("/node", (req,res) => {
    res.send("<h2>What is Node..?</h2><br/>  <p>Node.js, commonly known as Node, is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write server-side code, enabling the development of scalable and high-performance network applications.</p>")  
})
NavRoutes.get("/Ejson", (req,res) => {
    res.send({
        "Title": "What is Express..?",
        "discription": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
    })
})
NavRoutes.get("/Njson", (req,res) => {
    res.send({
        "Title": "What is Node..?",
        "discription": "Node.js, commonly known as Node, is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write server-side code, enabling the development of scalable and high-performance network applications.."
    })  
})
NavRoutes.get("/", (req,res) => {
    res.send("<h1>To see result in Symple Format type the url in last -- express or node</h1></br>  <h1>To see result in JSON Format type the url in last -- Ejson or Njson</h1>")
})



module.exports = NavRoutes;