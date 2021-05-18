const express = require("express");
const app = express();

const PORT =  process.env.PORT || 3000;

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/",(req,res)=>{
    res.send(`<h1>Hello world!!!!!!</h1>`)
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


app.use("/api/members", require("./routes/api/members"))



// npm init
// npm i express
// npm install -g npm 
// how to install nodemon =>  npm i -D nodemon 
//  "scripts": {
//     "start": "node index",
//     "dev": "nodemon index"
//   }
//  npm run dev


// generate unique id 
// npm i uuid