=======================================
Inserting Documents:
=======================================
  insertMany():
  --------------
  We use the db.collection_name.insertMany() method to insert an array of documents into a collection. 
  db points to the current database, collection_name is existing or a new collection name. It takes two arguments. 
    1. Array of documents. 
    2. Two objects (Optional)
        a). writeConcern
        b). ordered

  Syntax:
  --------
  db.collection_name.insertMany(
    [document1, document2, ..], 
    {
      writeConcern: document, 
      ordered: boolean
    } 
  );

  Parameters of insertMany():
  ----------------------------
  -> array of documents: An array of documents to insert into the collection.

  -> writeConcern: It is an object and is an optional argument to control the write behaviour. Generally we use its default settings.

  -> ordered: It is also an optional argument and holds a boolean value indicating whether it's ordered or unordered insert operation. 

  What is writeConcern?
  ---------------------
  The writeConcern describes the level of acknowledgment requested from MongoDB for write operations.
  Using writeConcern we decide whether we want acknowledgment or not. We decide to which level of acknowledgment etc. 

  The writeConcern property is an object and can include the following fields:
    { w: value, boolean: value, wtimeout: number }
    
    1: wtimeout: it is a number indicating time in miliseconds. It says if writing operation did not happens in specified period of time then skip that operation.

    2: journel(j): It is a file created by mongo. In this file mongo writes the status of writing operations. Means it is something like tracking the history of status of writing operation. 
      For example:
      suppose we start writing an array with 10 objects. It may happen that after writing 2 object some error generated like server shutdown etc. 
      It will stop the writing process.
      When server restarted then mongo should not start to write from starting whether it should start writing form 3rd Object.  

      if we want to enable this behaviour then we have to pass true as value to journel.

      We may think that what is the need of journel, because we are writing the data into database.
      Writing data to database is a costly operation and wiritng data to a file is faster as compared to wiriting in database. 
      However setting journel to true slow down the speed of writing operation because now mongo have to maintain journel File.   

    3: w: It says that, after writing data to how many instances, the writing operation should be considered as successful. 
    Here instances means database or copies of database.
      
      There may we multiple copies of a database.
      If we want that operation should be considered as successful even if only write data to primary database then:
        w: 1
      If we want that it should write data atleast 2 copies:
        w: 3
      There is one another option which is "majority".
      w: "majority"
      It means consider writing operation as successful when writing happen on majority count of instances. 

      If we don't care in which instance data is being written then we can pass:
        w: 0
      
      After monoDB version5, default value of w is "majority", earlier it was 0.

      Default value of 'j' and 'wtimeout' is undefined. 

  What is ordered/unordered:
  ---------------------------
    Ordered decides what will MongoDB do if during insertion of a particular record any error occurs.

    If we set it to true then if an error occurs with one of the documents, then MongoDB will return without processing the remaining documents in the array. 
    If we set it to false, then MongoDB will process all the documents even if an error occurred. 
    Its default value is true.
    so by default ,

  Example 1:
    use companydb;
    db.employees.insertMany(
      [
        {
          empName: "John",
          empSal: 50000.0
        },
        {
          empName: "Rohan",
          empSal: 30000.0
        }
      ]
    );

    mongo response:
      {
        acknowledged: true,
        insertedIds:{
         '0': ObjectId("434dfg535334244gfgd435w"),
         '1': ObjectId("968werew32e23vdvwpe0323")
        }  
      }

  Example 2:
    use companydb;
    db.employees.insertMany(
      [
        {
          empName: "John",
          empSal: 50000.0
        },
        {
          empName: "Rohan",
          empSal: 30000.0
        }
      ],
      {ordered: false}
    );

    mongo response:
      {
        acknowledged: true,
        insertedIds:{
         '0': ObjectId("434dfg535334244gfgd435w"),
         '1': ObjectId("968werew32e23vdvwpe0323")
        }  
      }
  
  Return value of insertMany()
  -----------------------------
    The method insertMany() returns a document that includes the newly inserted documents' _id field values.


Time:
      28 minutes.