CREATE DATABASE BOOKSTORE;
USE BOOKSTORE;

CREATE TABLE PUBLISHER(
	PUBLISHER_NAME VARCHAR(50) NOT NULL,
	MAILING_ADDRESS VARCHAR(50),
	PHONE_NUMBER VARCHAR(50),
	EMAIL VARCHAR(50),
	PRIMARY KEY (PUBLISHER_NAME)
);

CREATE TABLE SERIES(
    SERIES_NAME VARCHAR(50) NOT NULL,
    PUBLISHER_NAME VARCHAR(50) NOT NULL,
    PUBLICATION_FREQUENCY INT,
    COST_PER_BILLING_CYCLE INT,
    PRIMARY KEY (SERIES_NAME, PUBLISHER_NAME),
    FOREIGN KEY(PUBLISHER_NAME) REFERENCES PUBLISHER(PUBLISHER_NAME)
);

CREATE TABLE MAGAZINE_ISSUE(
    ISSUE_NUMBER INT NOT NULL,
    SERIES_NAME VARCHAR(50) NOT NULL,
    PUBLISHER_NAME VARCHAR(50) NOT NULL,
    CURRENT_TOTALS INT,
    QUANTITIES_ORDERED INT,
    IDEAL_AMOUNT INT,
    AMOUNT_SHIPPING INT,
    PUBLISH_DATE DATE,
    PRIMARY KEY (ISSUE_NUMBER, SERIES_NAME, PUBLISHER_NAME),
    FOREIGN KEY (SERIES_NAME, PUBLISHER_NAME) REFERENCES SERIES(SERIES_NAME, PUBLISHER_NAME)
);

CREATE TABLE WRITER(
    WRITER_ID INT NOT NULL,
    NAME VARCHAR(50),
    EMAIL VARCHAR(50),
    PHONE VARCHAR(50),
    PRIMARY KEY(WRITER_ID)
);

CREATE TABLE ARTICLE(
    WRITER_ID INT NOT NULL,
    ARTICLE_TITLE VARCHAR(50) NOT NULL,
    ISSUE_NUMBER INT,
    SERIES_NAME VARCHAR(50),
    PUBLISHER_NAME VARCHAR(50),
    PRIMARY KEY(WRITER_ID, ARTICLE_TITLE),
    FOREIGN KEY(WRITER_ID) REFERENCES WRITER(WRITER_ID),
    FOREIGN KEY(ISSUE_NUMBER, SERIES_NAME, PUBLISHER_NAME) REFERENCES MAGAZINE_ISSUE(ISSUE_NUMBER, SERIES_NAME, PUBLISHER_NAME)
);

CREATE TABLE ARTICLE_TOPICS (
    TOPIC_NAME VARCHAR(50) NOT NULL,
    WRITER_ID INT NOT NULL,
    ARTICLE_TITLE VARCHAR(50) NOT NULL,
    PRIMARY KEY(TOPIC_NAME, ARTICLE_TITLE, WRITER_ID),
    FOREIGN KEY(WRITER_ID, ARTICLE_TITLE) REFERENCES ARTICLE(WRITER_ID, ARTICLE_TITLE)
);

CREATE TABLE CUSTOMER (
    CUSTOMER_ID INT NOT NULL,
    CUSTOMER_NAME VARCHAR(50),
    MAILING_ADDRESS VARCHAR(50),
    SUBSCRIPTION_TYPE VARCHAR(50),
    PHONE_NUMBER VARCHAR(50),
    EMAIL VARCHAR(50),
    PRIMARY KEY(CUSTOMER_ID)
);

CREATE TABLE MAGAZINE_SUBSCRIPTION(
    CUSTOMER_ID INT NOT NULL,
    SERIES_NAME VARCHAR(50) NOT NULL,
    PUBLISHER_NAME VARCHAR(50) NOT NULL,
    PRIMARY KEY(CUSTOMER_ID, PUBLISHER_NAME, SERIES_NAME),
    FOREIGN KEY(CUSTOMER_ID) REFERENCES CUSTOMER(CUSTOMER_ID),
    FOREIGN KEY(SERIES_NAME, PUBLISHER_NAME) REFERENCES SERIES(SERIES_NAME, PUBLISHER_NAME)
);

DELIMITER //
CREATE PROCEDURE select_publishers()
BEGIN
    SELECT * FROM PUBLISHER;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE insert_new_series()
BEGIN
INSERT INTO SERIES (SERIES_NAME, PUBLISHER_NAME, PUBLICATION_FREQUENCY, COST_PER_BILLING_CYCLE) VALUES ('Political News', 'Johnathan Publishing', 24, 30);
END//
DELIMITER ;

CREATE VIEW v1 AS SELECT CUSTOMER_NAME, SUBSCRIPTION_TYPE FROM CUSTOMER;
CREATE VIEW v2 AS SELECT ISSUE_NUMBER, SERIES_NAME, PUBLISHER_NAME FROM MAGAZINE_ISSUE;
CREATE VIEW v3 AS SELECT ARTICLE_TITLE, SERIES_NAME, ISSUE_NUMBER FROM ARTICLE;