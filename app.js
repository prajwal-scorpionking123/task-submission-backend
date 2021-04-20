
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


//mysql connection
const connection = mysql.createConnection({
    host     : 'localhost',       
    user     : 'root',          //hello this is prajwal; put username as per your system
    password : '',              //Use the your mysql password
    database : 'mockdb'         
  });

connection.connect();

app.get("/users",(req,res)=>{
    connection.query('SELECT * from MOCK_DATA', function (error, results, fields) {
        if (error){
            return res.status(400).json({"error message":error});
        }
        return res.status(200).send(results);
      });
});

app.listen(3001,()=>{
    console.log("server is runing on port 3001");
})
