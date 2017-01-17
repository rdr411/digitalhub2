  var MongoClient = require('mongodb').MongoClient;
  var assert = require('assert');
  var ObjectId = require('mongodb').ObjectID;
  var url = 'mongodb://digitalhub2:NldlMqMl4lqTJu3W3JHKUzjnzG7nsE0HiCsBkxYN84fvQDbyjUf2YDG1bQhNgRcLp9NbDkTOy7HYWgl3uJsYVw==@digitalhub2.documents.azure.com:10250/?ssl=true&ssl_cert_reqs=CERT_NONE';

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
 if (err) {
        throw err;
    } else {
        console.log("Successfully connected to digitalhub2.documents.azure.com");
    }
           db.collection('content_items').find().toArray(function(e, d) {
            console.log(d.length);
           db.close();
          });
    });
