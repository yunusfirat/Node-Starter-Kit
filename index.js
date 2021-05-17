const express = require("express");

const app = express();

const PORT =  process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send(`<h1>Hello world!!!!!!</h1>`)
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// how to install nodemon =>  npm i -D nodemon 
//  "scripts": {
//     "start": "node index",
//     "dev": "nodemon index"
//   }