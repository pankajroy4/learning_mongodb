/*
About mongodb:
===================
MongoDB is an open source, document oriented database that stores data in form of documents (key and value pairs). 
A document based database is one of the types of NoSQL database.

MongoDB was created by Eliot and Dwight (founders of DoubleClick) in 2007 when they faced scalability issues while working with relational database.
The organization that developed MongoDB was originally known as 10gen.
In Feb 2009, they released MongoDB as an open source Project. 
Finally, the organization changed its name in 2013 and now known as MongoDB Inc.

mongodb basics:
========================
  it is important to understand 4 technical terms in MongoDB .
  These 4 terms are:
    1: Database
    2: Collections
    3: Documents
    4: BSON

  Data in MongoDB is made up of three types of components:
    databases, collections, and documents.

  The database sits at the top of the hierarchy, collections at the next level, and documents at the bottom. 

  A database provides a container for storing and organizing data.
  Each database contains one or more collections, and each collection contains zero or more documents.

Understanding mongodb documents:
=======================================
  The document, which is comprised of field/value pairs, is at the heart of the MongoDB data structure. 

  Most interactions with MongoDB occur at the document level.

  A field can contain a single value, multiple fields, or multiple elements.(as in nested object)

    db.users.insert(       <= here, users is collection
      {
        name: "John",      <=  field:value
        age: 26,
        status: "A"
      }
    )

Documents with array:
==========================
  A value made up of multiple elements is referred to as an *array and is assigned the Array data type.

  A field can contain single value.
  A field can contain array of values.
  A field can contain array of sub documents.

  {
    first_name: "Paul",    <= single value
    surname: "Miller",
    city: "Banglore",
    profession: ['banking', 'finance'],  <= Array as value
  }

Embedded documents:
=========================
A value made up of multiple fields is referred to as an *embedded document and is assigned the Object data type .

  {
    first_name: "Paul",    <= single value
    surname: "Miller",
    city: "Banglore",
    profession: ['banking', 'finance'],  <= Array as value
    cars: [
            { model: "Bentley",
              year: 1973,
              price: 1200000 
            },                      <= Array of documents as value
            { model: "Rolls Royce",
              year: 1965,
              price: 19200000 
            },
          ]
  }

  A real world use case:
  ================================
    Suppose we are developing an application for a training institute and we have a page that displays student names and the courses that they have enrolled in.

    how mysql will represent this ?
    ----------------------------------
    To model this use-case, in a relational database world like MySQL or Oracle, we typically create 3 tables:

    Students - Stores the details of students like Id and Name.
    Courses  - Stores the course details like course Id and Name.
    StudentCourses - Storing Student Id and Course Id  taken by each Student.

    Students Table:
    +----------+--------+ 
    |   _id    | name   |
    +----------+--------+
    | 9c43243  | Alice  |
    | 3g45435  | Bob    |
    | 5H78559  | Charlie|
    +----------+--------+
  

    Courses Table:
    +-----+---------------+
    | _id |     name      |
    +-----+---------------+
    |  1  |    SQL        |
    |  2  |    Server     |
    |  3  |    PHP        |
    |  4  |    Ruby       |
    |  5  |    CPP        |
    |  6  |    Pyhton     |
    |  7  |    ASP.NET    |
    +-----+---------------+


    StudentCourses Table:
    +------------+-----------+
    | student_id | course_id |
    +------------+-----------+
    |  9c43243   |     1     |
    |  9c43243   |     2     |
    |  9c43243   |     4     |
    |  3g45435   |     5     |
    |  3g45435   |     4     |
    |  3g45435   |     6     |
    |  3g45435   |     3     |
    |  5H78555   |     5     |
    |  5H78555   |     4     |
    |  5H78555   |     7     |
    +------------+-----------+

  
    how mongo will represent this ?
    -----------------------------------
    As we have already discussed, in Mongo we do not have tables and rows, instead we have collections and documents.

    In mongoDB,we will just create one collection and store the above data as like below:
      {
        {
          _id: "9c43243",
          name: "Alice",
          courses: ["SQL", "Server", "Ruby"]
        },
        {
          _id: "3g45435",
          name: "Bob",
          courses: ["CPP", "Ruby", "Pyhton", "PHP"]
        },
        {
          _id: "5H78555",
          name: "Charlie",
          courses: ["CPP", "Ruby", "ASP.NET"]
        }
      }

      In this example:
      We have 1 collection called studentCourses containing 3 documents.

      So, just like a table is a container for rows, a collection is a container for documents which hold the actual data.
      This data is in BSON format so the documents are also called BSON documents. 

      Benefits
      ---------------
      The same students and courses data that we have across 3 tables in a relational database can be stored in a single collection in Mongo.

      For an application this data is very easy to work with. 
      No complex joins and mapping layers are required and so our application code will be much cleaner, simpler and easier to maintain.

BSON:
=============================
MongoDB stores data in BSON(binary json) format internally on the disk. 
But that doesn’t mean we can’t think of MongoDB as a JSON database. 
Anything we can represent in JSON can be natively stored in MongoDB, and retrieved just as easily in JSON.

Moreover in our code we can use the data types provided by our language and the MongoDB package/driver will convert the data to BSON and back when querying the database.

Json v/s bson
======================

  +--------------------------------+--------------------------+
  |            JSON                |         BSON             |
  +--------------------------------+--------------------------+
  |  Encoding: UTF-8 String        |         Binary           |
  +--------------------------------+--------------------------+
  |  Readability: Humans & machine |     Maachine Only        |
  +--------------------------------+--------------------------+
  |  Data Types: String, Booleans, |  String, Boolean, Date,  |
  |     Number, Array              |   Number(Integer, Float, |
  |                                |    Long, Decimal128),    |
  |                                |    Array, Raw Binaary    |
  +--------------------------------+--------------------------+ 


Working with Mongodb:
====================================
There are 2 ways to work with MongoDB:
  1: By using cloud service. 
  2: By installing on local machine.

Cloud server:
====================================
The cloud service of MongoDb is called Atlas.
It is a multi-cloud database service by the same people that build MongoDB. 
Atlas is available on AWS , Azure as well as GCP and simplifies deploying and managing our databases .

Local installation:
==============================
Local installation allows us to host our own MongoDB server on our computer. 
This server is called MongoDB community Server and it requires us to manage our server, upgrades, and any other maintenance.
We will be using this approach.

Vists below link to install mongoDB:
     https://www.mongodb.com/docs/manual/tutorial/


Installing mongodb Locally:
====================================
When we install MongoDB locally we get 3 components:
  1. MongoDB Community Server
  2. MongoDB Shell
  3. MongoDB Compass

mongoDB Community server:
==================================
MongoDB Community Server is a free and open-source version of MongoDB.
It is designed for developers and small-scale deployments and offers dev rich and intuitive features for saving and querying data.

mongoDB shell:
============================
MongoDB Shell is an interactive JavaScript interface for querying and modifying database data. 
We can also use it to perform administrative operations like creating databases, collections etc.

mongoDB compass:
========================
MongoDB Compass is a GUI (Graphical User Interface) for querying, visualizing and modifying database data. 
Behind the scenes, both the Shell and Compass issues the same commands to the database server.


Before using mongodb(Steps for windows machine):
================================================
Before we start using MongoDB following 3 steps must be taken:
  1.Ensure that PATH to MongoDB bin folder is set.
  2.Ensure that PATH to mongosh is set. i.e enviromental variables is set.
  3.Ensure that two folders called data/db must exist in C:\drive 

Using mongodb:
==================================
To interact with MongoDB we need to do 2 things:
  1.Start the MongoDB server : 
    This is done by executing the "mogod" command on the command prompt.
    => mogod

  2.Open the Mongo Shell: 
    This is done by executing the "mongosh" command on the command prompt.
    => mongosh

What is mongod command ?
===========================
  The mongod command stands for “Mongo Daemon”.
  It is a background process used by MongoDB. 
  The main purpose of mongod is to manage all the MongoDB server tasks like:
    accepting requests
    responding to client and 
    memory management

What is mongsh command ?
=============================
  The mongsh command stands for “Mongo Shell”.
  It launches the MongoDB Shell which is the quickest way to connect, configure, query and work with our MongoDB database. 

  The MongoDB shell acts as a command-line client of the MongoDB server.

  Do list all databases run the comamnd:
    show dbs;
  It should display all the databases on the connected server.

  Commands for Ubuntu:
  ------------------------
    > sudo systemctl start mongod
    > mongosh
    > sudo systemctl stop mongod
   
*/ 