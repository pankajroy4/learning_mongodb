/* 
Introduction to nosql databases:
=====================================
NoSQL stands for Not only SQL. 
NoSQL Databases are also known as non-relational databases that don’t require a fixed schema. 

The term NoSQL stands for Not Only SQL and it means, a non-relational database is a non-tabular database and stores data differently than relational tables.

For example, in a relational database like SQL server or Oracle data is stored in tables whereas in a non-relational database like MongoDB data is stored in a different format.
These are called Collections and Documents.

  (in SQL)                (in NoSql)
  Tables    ===========>  Collections 
  Rows      ===========>  Documents (JSON/BSON, an object)
  Columns   ===========>  Fields

So,
In both , SQL and non-relational world, we have Database at the top. 
In SQL we have tables and in the non-relational world (like MongoDB for example) we have Collections.

Table rows in SQL world correspond to BSON documents in MongoDB. The term BSON is binary JSON. ( we will discuss it later)

A column in the SQL world corresponds to a field in a JSON document.

Types of nosql databases:
===================================
  1: Document Database 
    => As the name implies data is stored in documents, for example in JSON/BSON documents. 
    Examples are MongoDB and CouchDB.

  2: Key-Value Database
    => It stores data as a collection of key-value pairs in which a key is used as a unique identifier. 

    Both keys and values can be anything, ranging from simple objects to complex compound objects. 

    Examples are DynamoDB and Redis.

  3: Wide-Column store
    => It is similar to a relational database in the sense it stores data in rows and columns, however the columns are dynamic and each row does not have to have the same columns. 

    Examples are HBase and Cassandra.

  4: Graph database
    => It is used to store and navigate relationships. 
    Heavily used in social networking as It is easy to create relationships between data entities and quickly query these relationships.
    For example we can find out who the "friends of friends" of a particular person are. 

    Examples - Dgraph and OrientDB.

Note:
  We may think that Document databse and key-value Database are same. But that's not true.

  => A document database is, at its core, a key/value store with one major exception. 
  Instead of just storing any format in it, a document db requires that the data will be store in a format that the database can understand. 
  The format can be XML, JSON, Binary JSON (MongoDB), or just about anything, as long as the database can understand it.

  In key-value noSql database, have no fixed format , while document databses have fixed format of the data it is going to store.
  Here fixed format does not means fixed schema.
  Fixed format means: The data it store should be of a fixed format type like JSON/BSON.
  Where as in key-value noSql database, Data is sotred in any format means, any format of data can be stored.

Benefit of nosql database:( document database)
===============================================
  1. Flexible Schema:
    JSON documents that actually store data have a flexible schema 
    It means that it is perfectly okay and normal for 2 documents to have different number of fields and different kind of fields. 
    Example:

    JSON Document 1:
      {
        "_id": 1,
        "name": "John",
        "graduated": true
      }

    JSON Document 2:
      {
        "_id": 2,
        "name": "John",
        "gender": "Male",
        "age": 30
      }

    Both the documents shown above are a part of same collection.
    Both have id and name fields. 
    In the first document we have graduated boolean field, whereas in the second document instead of graduated we have a string gender field.
    In second document we also have an extra key by name "age". 

    So the point is, that document schema in Mongo is dynamic and every  document we save in Mongo can be as simple or as complex as our application requires.

  2. Easy to use data model: 
    In a document database like MongoDB we do not have tables and rows, instead we have collections and documents. 
    The data that we typically store across many relational database tables can be stored in a single collection. 

    For a programmer this data is very easy to work with since no complex joins and mapping layers are required. 

    Our application code will be much cleaner, simpler and easier to maintain.

  3. Easy horizontal scaling: 
    Most SQL databases allow only vertical scaling which is also called as scaling up.
    It means adding more resources (like memory, storage etc) to the existing database server to ensure that the required service can be provided to the users. 
    But vertical scaling has an upper limit beyond which we cannot just add more CPU, memory etc. 
    There is also downtime involved. 
    We have to shut the database server down to add more hardware.

    MongoDB on the other hand supports horizontal scaling which is also commonly called scaling out. 
    In horizontal scaling, data is partitioned and distributed across many servers. 
    So in simple terms, scaling horizontally means adding more servers to the already existing pool of servers. 

    This means we are not limited to the capacity of a single server. 
    There is no need to turn off existing servers to add a new server to the pool, so there is no downtime as well.

*/