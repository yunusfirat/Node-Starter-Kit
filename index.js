const express = require("express");

const app = express();

const PORT =  process.env.PORT || 3000;

const members = require("./Members");
app.get("/",(req,res)=>{
    res.send(`<h1>Hello world!!!!!!</h1>`)
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// how to install nodemon =>  npm i -D nodemon 
//  "scripts": {
//     "start": "node index",
//     "dev": "nodemon index"
//   }

// get all members
app.get("/api/members", (req, res) => {
    res.json(members);
})

// get single member

app.get("/api/members/:id", (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member =>  member.id === parseInt(req.params.id)))
    }else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    } 
})