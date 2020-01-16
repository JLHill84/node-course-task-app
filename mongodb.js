// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("connection failure");
    }
    const db = client.db(databaseName);

    db.collection("tasks").findOne(
      { _id: new ObjectID("5e1cf06c0aa7d0676cf37c18") },
      (error, task) => {
        if (error) {
          return console.log("unable to find task");
        }
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log("tasks not found");
        }
        console.log(tasks);
      });
  }
);