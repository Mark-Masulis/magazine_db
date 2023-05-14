var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

//req.query.user
//req.query.password
router.get('/publishers', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM PUBLISHER', (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.query.user
//req.query.password
//req.query.series_name
//req.query.publisher_name
router.get('/series', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    if(req.query.publisher_name && req.query.series_name){
        connection.query('SELECT * FROM SERIES WHERE PUBLISHER_NAME=? AND SERIES_NAME=?', [req.query.publisher_name, req.query.series_name], (error, results, fields) => {
            if(error){
                res.status(400).json({message: 'Unable to complete query.'});
            }else{
                res.status(200).json(results);
            }
        })
    }else if(req.query.publisher_name){
        connection.query('SELECT * FROM SERIES WHERE PUBLISHER_NAME=?', [req.query.publisher_name], (error, results, fields) => {
            if(error){
                res.status(400).json({message: 'Unable to complete query.'});
            }else{
                res.status(200).json(results);
            }
        })
    }else{
        connection.query('SELECT * FROM SERIES', (error, results, fields) => {
            if(error){
                res.status(400).json({message: 'Unable to complete query.'});
            }else{
                res.status(200).json(results);
            }
        })
    }
});

//req.query.user
//req.query.password
//req.query.publisher_name
//req.query.series_name
router.get('/magazine_issues', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM MAGAZINE_ISSUE WHERE SERIES_NAME=? AND PUBLISHER_NAME=?', [req.query.series_name, req.query.publisher_name], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.query.user
//req.query.password
//req.query.issue_number
//req.query.publisher_name
//req.query.series_name
router.get('/magazine_issue', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM MAGAZINE_ISSUE WHERE SERIES_NAME=? AND PUBLISHER_NAME=? AND ISSUE_NUMBER=?', [req.query.series_name, req.query.publisher_name, req.query.issue_number], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.query.user
//req.query.password
//req.query.publisher_name
//req.query.series_name
//req.query.issue_number
router.get('/articles_from_issue', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM ARTICLE WHERE ISSUE_NUMBER=? AND SERIES_NAME=? AND PUBLISHER_NAME=?', [req.query.issue_number, req.query.series_name, req.query.publisher_name], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.query.user
//req.query.password
//req.query.writer_id
router.get('/articles_from_writer', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM ARTICLE WHERE WRITER_ID=?', [req.query.writer_id], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.query.user
//req.query.password
//req.query.writer_id
router.get('/writer', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM WRITER WHERE WRITER_ID=?', [req.query.writer_id], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});



//req.query.user
//req.query.password
//req.query.writer_id
//req.query.article_title
router.get('/article_topics', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM ARTICLE_TOPICS WHERE WRITER_ID=? AND ARTICLE_TITLE=?', [req.query.writer_id, req.query.article_title], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.query.user
//req.query.password
router.get('/customers', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM CUSTOMER', (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.query.user
//req.query.password
//req.query.customer_id
router.get('/customer', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM CUSTOMER WHERE CUSTOMER_ID=?', [req.query.customer_id], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.query.user
//req.query.password
//req.query.customer_id
router.get('/customer_subscriptions', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.query.user,
        password: req.query.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('SELECT * FROM MAGAZINE_SUBSCRIPTION WHERE CUSTOMER_ID=?', [req.query.customer_id], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

module.exports = router;