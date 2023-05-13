var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

//req.query.user
//req.query.password
router.get('/publishers', async (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err)
            res.status(400).json({message: 'Could not connect to database.'})
        }
    })

    connection.query('SELECT * FROM PUBLISHER', (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'})
        }else{
            console.log(results);
            console.log(fields);
            res.status(200).json({});
        }
    })
})

module.exports = router;