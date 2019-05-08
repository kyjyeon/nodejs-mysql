var mysql = require('mysql')
var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'duswns',
    database: 'customers',
})

connect.connect(function(err){
    if(err) throw err;
    console.log("Connected to mysql..");

    var InsertData = "INSERT INTO customers (name, email, gender) VALUES ?";
    var Values = [
        ['AHN JUNG', 'imhihi@gmail.com', 'M'],
        ['Me Me', 'gmail@gmail.com','F'],
        ['HANJUN JUNG', 'whatup@naver.com', "F"],
    ]
    connect.query(InsertData, [Values], function(err, result){
     if(err) throw err;
     console.log('Data Inserted: '+ result.affectedRows);
    });
})