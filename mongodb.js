// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("connection failure");
    }
    const db = client.db(databaseName);

    // db.collection("tasks").insertMany(
    //   [
    //     { description: "Work", completed: true },
    //     { description: "Eat dinner", completed: false },
    //     { description: "Basketball practice", completed: false }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("error adding tasks");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    //
    db.collection("users").insertOne(
      {
        name: "Rupert",
        age: 30,
        _id: id
      },
      (error, result) => {
        if (error) {
          return console.log("failed to insert user");
        }
        console.log(result.ops);
      }
    );

    // db.collection("users").insertMany(
    //   [
    //     { name: "Carey", age: 31 },
    //     { name: "Pepper", age: 5 }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("error adding records");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
