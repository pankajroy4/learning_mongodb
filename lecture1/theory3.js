/*
Global object:
========================
Mongo provides a global object called "db" which represents the current database. This object has various methods using which we can interact to mongo for creating, delating, updating database, documents. Example:
  db.dropDatabase() it drops the current database.
  db.createCollection("collection_name") it creates a collection in current database.
  
Mongo databases commands and methods:
======================================
  1: List all the databases
    show dbs;
    Mongo do not list the database if the database do not have atleast one collection.

  2: create database or connect to a databse
    use databaseName;
    The above code will either create a database called databaseName if it does not exists , otherwise it will simply connect to it.

  3: Delete Database
    db.dropDatabase();
    It delete the current database.
    
  4: create collection
     db.createCollection("collection_name");

  5: List collections
     show collections; it lists the collections in the current database.

  6: Delete collection
     db.collection_name.drop();

=====================================================
Inserting Documents:
=====================================================
  MongoDB provides the following methods to insert documents into a collection:
    insertOne() - Inserts a single document into a collection.
    insertMany() - Insert multiple documents into a collection.

    These are the methods of collection.

  insertOne():
  --------------
  We use the db.collection_name.insertOne() method to insert a single document in a collection. 
  db points to the current database, collection_name is existing or a new collection name.

  db.collection_name.insertOne(document);

  What is document here ?:
    It’s the JS object we want to be inserted into the collection.
  Example:
    use companydb;
    db.employees.insertOne({
      empName: "John",
      empSal: 50000.0
    });

    mongo response:
      {
        acknowledged: true,
        insertedID: ObjectId("434dfg53534gfgd435w")
      }
    
    MongoDB needs a unique id for every document but since we haven’t specified the _id field so, MongoDB inserts a document to a collection with the auto-generated unique _id field and returns insertedId field with the newly inserted value of  _id . It is the primary key.

  Insert '_id' manually:
  -------------------------
  It is not necessary to insert the auto-generated value for the field _id.
  We can manually specify a unique value for the _id field.
  example:
    db.employees.insertOne({
      _id: 101,
      empName: "John",
      empSal: 50000.0
    });

      mongo response:
        { acknowledged: true, insertedID: 101 }
      
  How to view the documents ?
  ------------------------------
  To lists all the documents of a collection we use the method db.collection_name.find()
    example:
      db.employees.find();
    output: On mongo shell
      [
        {
          _id: ...,
          name: ...
        },
        {
          _id: ...,
          name: ....,
          sal: ...
        }
      ]

    Note:
      find() returns the "cursor". 
      It is something like pointer.
      When we use find() on mongoshell, then monogshell itself automatically coverts the cursor into an array of documents and display the output.
      We will learn more about it later.

  Formatting the output:
  ------------------------
  Many times, when we use mongoshell, the output of find() is not in any format and less-readable. 
  To improve the readability, we can format the output in JSON format by using the method pretty() with find().
  
  pretty() is the method of cursor object. As we know find() returns cursor, so we can use method chaining.
  example:
    db.employees.find().pretty();

*/