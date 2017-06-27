'use strict';

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const dbfile = 'reservations.db';
const db = new sqlite3.Database(dbfile);

// db.all("SELECT * from customers", (err, data) => {
//   if (!err) console.log(data);
//   else console.log(err);
// });

// db.all("SELECT * from rooms", (err, data) => {
//   if (!err) console.log(data);
//   else console.log(err);
// });

// db.all("SELECT * from rooms JOIN customers", (err, data) => {
//   if (!err) console.log(data);
//   else console.log(err);
// });

// db.all("SELECT * from rooms JOIN customers WHERE rooms.customerId=customers.customerId", (err, data) => {
//   if (!err) console.log(data);
//   else console.log(err);
// });

db.all("SELECT * from rooms NATURAL LEFT OUTER JOIN customers", (err, data) => {
  if (!err) console.log(data);
  else console.log(err);
});