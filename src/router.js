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

//req.body.publisher_name
//req.body.address
//req.body.phone
//req.body.email
router.post('/publisher', (req, res) => {
    console.log(req.body)
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.body.user,
        password: req.body.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('INSERT INTO PUBLISHER (PUBLISHER_NAME, MAILING_ADDRESS, PHONE_NUMBER, EMAIL) VALUES (?, ?, ?, ?)', [req.body.publisher_name, req.body.address, req.body.phone, req.body.email], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
})

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

//req.body.series_name
//req.body.publisher_name
//req.body.publication_frequency
//req.body.cost
router.post('/series', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.body.user,
        password: req.body.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('INSERT INTO SERIES (SERIES_NAME, PUBLISHER_NAME, PUBLICATION_FREQUENCY, COST_PER_BILLING_CYCLE) VALUES (?, ?, ?, ?)', [req.body.series_name, req.body.publisher_name, req.body.publication_frequency, req.body.cost], (error, results, fields) => {
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

//req.body.issue_number
//req.body.series_name
//req.body.publisher_name
//req.body.current_totals
//req.body.quantities_ordered
//req.body.ideal_amount
//req.body.amount_shipping
//req.body.publish_date
router.post('/magazine_issue', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.body.user,
        password: req.body.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('INSERT INTO MAGAZINE_ISSUE (ISSUE_NUMBER, SERIES_NAME, PUBLISHER_NAME, CURRENT_TOTALS, QUANTITIES_ORDERED, IDEAL_AMOUNT, AMOUNT_SHIPPING, PUBLISH_DATE) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [req.body.issue_number, req.body.series_name, req.body.publisher_name, req.body.current_totals, req.body.quantities_ordered, req.body.ideal_amount, req.body.amount_shipping, req.body.publish_date], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
})

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

//req.query.writer_id
//req.query.article_title
//req.query.username
//req.query.password
router.get('/article', (req, res) => {
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

    connection.query('SELECT * FROM ARTICLE WHERE WRITER_ID=? AND ARTICLE_TITLE=?', [req.query.writer_id, req.query.article_title], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

//req.body.writer_id
//req.body.article_title
//req.body.issue_number
//req.body.series_name
//req.body.publisher_name
router.post('/article', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.body.user,
        password: req.body.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('INSERT INTO ARTICLE (WRITER_ID, ARTICLE_TITLE, ISSUE_NUMBER, SERIES_NAME, PUBLISHER_NAME) VALUES (?, ?, ?, ?, ?)', [req.body.writer_id, req.body.article_title, req.body.issue_number, req.body.series_name, req.body.publisher_name], (error, results, fields) => {
        if(error){
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
})

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

//req.body.writer_id
//req.body.name
//req.body.email
//req.body.phone
router.post('/writer', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.body.user,
        password: req.body.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('INSERT INTO WRITER (WRITER_ID, NAME, EMAIL, PHONE) VALUES (?, ?, ?, ?)', [req.body.writer_id, req.body.name, req.body.email, req.body.phone], (error, results, fields) => {
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

//req.body.user
//req.body.password
//req.body.writer_id
//req.body.article_title
//req.body.topic_name
router.post('/article_topic', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.body.user,
        password: req.body.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('INSERT INTO ARTICLE_TOPICS (TOPIC_NAME, WRITER_ID, ARTICLE_TITLE) VALUES (?, ?, ?)', [req.body.topic_name, req.body.writer_id, req.body.article_title], (error, results, fields) => {
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

//req.body.user
//req.body.password
//req.body.customer_id
//req.body.name
//req.body.mailing_address
//req.body.subscription_type
//req.body.phone
//req.body.email
router.post('/customer', (req, res) => {
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.body.user,
        password: req.body.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('INSERT INTO CUSTOMER (CUSTOMER_ID, CUSTOMER_NAME, MAILING_ADDRESS, SUBSCRIPTION_TYPE, PHONE_NUMBER, EMAIL) VALUES (?, ?, ?, ?, ?, ?)', [req.body.customer_id, req.body.name, req.body.mailing_address, req.body.subscription_type, req.body.phone, req.body.email], (error, results, fields) => {
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

//req.body.user
//req.body.password
//req.body.customer_id
//req.body.series_name
//req.body.publisher_name
router.post('/subscription', (req, res) => {
    console.log(req.body)
    var connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: req.body.user,
        password: req.body.password,
        database: 'BOOKSTORE'
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            res.status(400).json({message: 'Could not connect to database.'});
        }
    })

    connection.query('INSERT INTO MAGAZINE_SUBSCRIPTION (CUSTOMER_ID, SERIES_NAME, PUBLISHER_NAME) VALUES (?, ?, ?)', [req.body.customer_id, req.body.series_name, req.body.publisher_name], (error, results, fields) => {
        if(error){
            console.log(error)
            res.status(400).json({message: 'Unable to complete query.'});
        }else{
            res.status(200).json(results);
        }
    })
});

module.exports = router;