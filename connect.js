/**
 * Created by 1303721 on 30/11/2015.
 */

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
// Connection URL.This is where your mongodb server is running.
var url = 'mongodb://<1303721>:<greencar23>@ds054118.mongolab.com:54118/nodeapp';
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
