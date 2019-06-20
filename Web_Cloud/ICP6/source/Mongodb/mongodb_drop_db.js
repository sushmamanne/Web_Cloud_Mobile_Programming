/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ICP6:mongo@cluster0-fe1po.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.dropDatabase();
    console.log("Database deleted");
});