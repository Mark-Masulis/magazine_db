USE BOOKSTORE;

INSERT INTO PUBLISHER
    (PUBLISHER_NAME, MAILING_ADDRESS, PHONE_NUMBER, EMAIL)
    VALUES 
        ('Johnathan Publishing', '123 Main Street', '4081234567', 'inquiries@john.com'),
        ('Books and More', '456 7th Street', '4082468024', 'booksandmorebusiness@gmail.com'),
        ('Defunct Publishing Company', '111 Bankrupt Avenue', '4080000000', 'this-entry-can-be-deleted@gmail.com');

INSERT INTO SERIES
    (SERIES_NAME, PUBLISHER_NAME, PUBLICATION_FREQUENCY, COST_PER_BILLING_CYCLE)
    VALUES
        ('Animal Magazine', 'Johnathan Publishing', 12, 20),
        ('Cooking Magazine', 'Johnathan Publishing', 6, 15),
        ('Celebrity Gossip', 'Books and More', 52, 30),
        ('Animal Magazine', 'Books and More', 2, 10),
        ('Magazine With No Issues', 'Books and More', 24, 100);

INSERT INTO MAGAZINE_ISSUE
    (ISSUE_NUMBER, SERIES_NAME, PUBLISHER_NAME, CURRENT_TOTALS, QUANTITIES_ORDERED, IDEAL_AMOUNT, AMOUNT_SHIPPING, PUBLISH_DATE)
    VALUES
        (1, 'Animal Magazine', 'Johnathan Publishing', 100, 25, 150, 80, '2023-03-15'),
        (2, 'Animal Magazine', 'Johnathan Publishing', 80, 50, 150, 90, '2023-04-15'),
        (1, 'Animal Magazine', 'Books and More', 45, 25, 70, 50, '2022-06-01'),
        (2, 'Animal Magazine', 'Books and More', 70, 0, 70, 58, '2023-01-01'),
        (1, 'Cooking Magazine', 'Johnathan Publishing', 25, 30, 100, 15, '2022-02-01'),
        (1, 'Celebrity Gossip', 'Books and More', 100, 50, 200, 76, '2023-04-01'),
        (2, 'Celebrity Gossip', 'Books and More', 80, 100, 200, 99, '2023-04-08'),
        (3, 'Celebrity Gossip', 'Books and More', 55, 150, 200, 100, '2023-04-15');

INSERT INTO WRITER
    (WRITER_ID, NAME, EMAIL, PHONE)
    VALUES
        (0, 'Albert Smith', 'albertsmith@gmail.com', '4081111111'),
        (1, 'Jerry Lee', 'jerry-lee@yahoo.com', '4082222222'),
        (2, 'No Articles', 'this-writer-can-be-delete@gmail.com', '4083333333');

INSERT INTO TOPIC
    (TOPIC_NAME)
    VALUES
        ('NATURE'),
        ('FOOD'),
        ('ENTERTAINMENT'),
        ('LIFESTYLE'),
        ('SCIENCE'),
        ('CURRENT EVENTS'),
        ('POLITICS'),
        ('INTERNATIONAL');

INSERT INTO ARTICLE
    (WRITER_ID, ARTICLE_TITLE, ISSUE_NUMBER, SERIES_NAME, PUBLISHER_NAME)
    VALUES
        (0, 'The President and His Dog', 1, 'Animal Magazine', 'Johnathan Publishing'),
        (0, 'Missing Dog Found!', 2, 'Animal Magazine', 'Johnathan Publishing'),
        (0, 'Actress Visits Foreign Warzone', 3, 'Celebrity Gossip', 'Books and More'),
        (0, 'Singers Break Up', 2, 'Celebrity Gossip', 'Books and More'),
        (1, 'How to Bake Ciabatta Bread', 1, 'Cooking Magazine', 'Johnathan Publishing'),
        (1, 'Cyborg Hamsters', 1, 'Animal Magazine', 'Books and More'),
        (1, 'New Species of Bird Discovered in Australia', 2, 'Animal Magazine', 'Books and More'),
        (1, 'What Food Should You Buy For Your Dog?', 1, 'Animal Magazine', 'Johnathan Publishing'),
        (1, 'Director Secretly Has Affair?!', 1, 'Celebrity Gossip', 'Books and More');

INSERT INTO ARTICLE_TOPICS
    (TOPIC_NAME, WRITER_ID, ARTICLE_TITLE)
    VALUES
        ('POLITICS', 0, 'The President and His Dog'),
        ('CURRENT EVENTS', 0, 'Missing Dog Found!'),
        ('ENTERTAINMENT', 0, 'Actress Visits Foreign Warzone'),
        ('INTERNATIONAL', 0, 'Actress Visits Foreign Warzone'),
        ('POLITICS', 0, 'Actress Visits Foreign Warzone'),
        ('ENTERTAINMENT', 0, 'Singers Break Up'),
        ('LIFESTYLE', 1, 'How to Bake Ciabatta Bread'),
        ('FOOD', 1, 'How to Bake Ciabatta Bread'),
        ('SCIENCE', 1, 'Cyborg Hamsters'),
        ('NATURE', 1, 'New Species of Bird Discovered in Australia'),
        ('INTERNATIONAL', 1, 'New Species of Bird Discovered in Australia'),
        ('LIFESTYLE', 1, 'What Food Should You Buy For Your Dog?'),
        ('ENTERTAINMENT', 1, 'Director Secretly Has Affair?!');

INSERT INTO CUSTOMER
    (CUSTOMER_ID, CUSTOMER_NAME, MAILING_ADDRESS, SUBSCRIPTION_TYPE, PHONE_NUMBER, EMAIL)
    VALUES
        (0, 'George', '123 Wood Street', 'Auto-Renew', '4081212121', 'george@gmail.com'),
        (1, 'Sarah', '111 First Street', 'No Renewal', '4082323232', 'sarah@gmail.com'),
        (2, 'Jesse', '333 CanDelete Avenue', 'Auto-Renew', '4084545454', 'jesse@gmail.com');

INSERT INTO MAGAZINE_SUBSCRIPTION
    (CUSTOMER_ID, SERIES_NAME, PUBLISHER_NAME)
    VALUES
        (0, 'Animal Magazine', 'Johnathan Publishing'),
        (0, 'Celebrity Gossip', 'Books and More'),
        (1, 'Animal Magazine', 'Books and More'),
        (1, 'Cooking Magazine', 'Johnathan Publishing'),
        (1, 'Animal Magazine', 'Johnathan Publishing');