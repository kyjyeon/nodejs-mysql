var mysql = require('mysql');

//Connection

var connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "duswns",
    database: "customers",
})

connect.connect(function(err){
    if(err) throw err;
    console.log("Connected to Mysql");

    // // var createdb = "CREATE DATABASE "
    // connect.query("CREATE DATABASE customers", function(err,result){
    //     if(err) throw err;
    //     console.log("Database customer created..")
    // })

    var createtb = "CREATE TABLE "
    connect.query(createtb + "customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))", function(err, result){
        if(err) throw err;
        console.log("Data Table Created..");
    });

    //Alter Table
    var altertb = "ALTER TABLE ";
    connect.query(altertb + "customers ADD COLUMN gender VARCHAR(2)", function(err, result){
        if(err) throw err;
        console.log("Table Altered...")
    })

    //Put Data into the Table
    var insertdata = "INSERT INTO ";
    connect.query(insertdata + "customers (name, email) VALUES ('JOHN SNOW','gotrocks@gmail.com')", function(err, result){
        if(err) throw err;
        console.log("Data Inserted..");
    })


})