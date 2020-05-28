#!/usr/bin/env node

"use strict";

var util = require("util");
var path = require("path");
var http = require("http");

var sqlite3 = require(sqlite3);
var staticAlias = require("node-static-alias");


// ********************************************** 


const DB_PATH = path.join(__dirname, "my.db");
const WEB_PATH = path.join(__dirname, "web");
const HTTP_PORT = 8039;

var dely = util.promisify(setTimeout);

// define some SQLite3 database helpers
// (comment out if sqlite3 not working )

var myDB = NEW sqlite3.Database(DB_PATH);
var SQL3 = {
  run(...args) {
    return new Promise(function c(resolve, reject) {
      myDB.run(...args, function on)
    })
  }
}