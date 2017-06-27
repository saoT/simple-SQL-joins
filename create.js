'use strict';

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const dbfile = 'reservations.db';
const db = new sqlite3.Database(dbfile);

if (!fs.existsSync(dbfile)) {

  // Pour créer une PRIMARY KEY je declare une column avec les types INTEGER PRIMARY KEY
  const customers = 'CREATE TABLE customers (customerId INTEGER PRIMARY KEY, name TEXT not null)';

  // Pour créer une FOREIGN KEY, je déclare une column comme les autres, et à la fin je la défini comme FOREIGN KEY et à quoi elle fait reference
  // customerId INTEGER
  // FOREIGN KEY(customerId) REFERENCES customers(customerId)
  const rooms = 'CREATE TABLE rooms (reservationId INTEGER PRIMARY KEY,customerId INTEGER, type TEXT not null, date DATE, FOREIGN KEY(customerId) REFERENCES customers(customerId))';

  db.serialize( () => {
    db.run(customers);
    db.run(rooms);
  });
}

function createCustomers () {
  db.run("INSERT INTO customers (name) VALUES (?)", 'robert', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
  db.run("INSERT INTO customers (name) VALUES (?)", 'john', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
  db.run("INSERT INTO customers (name) VALUES (?)", 'will', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
  db.run("INSERT INTO customers (name) VALUES (?)", 'peter', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
  db.run("INSERT INTO customers (name) VALUES (?)", 'dave', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
}

function createRooms () {
  db.run("INSERT INTO rooms (customerId, type, date ) VALUES (?,?,?)", 3, 'single', '24-08-2017',(err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
  db.run("INSERT INTO rooms (customerId, type, date ) VALUES (?,?,?)", 2, 'suite', '24-08-2017', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
  db.run("INSERT INTO rooms (customerId, type, date ) VALUES (?,?,?)", 5, 'double', '24-08-2017', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
  db.run("INSERT INTO rooms (customerId, type, date ) VALUES (?,?,?)", 1, 'single', '25-08-2017', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
  db.run("INSERT INTO rooms (customerId, type, date ) VALUES (?,?,?)", 1, 'double', '25-08-2017', (err) =>{
    if (!err) console.log('success');
    else console.log(err);
  });
}

// Pour créer les customers
// createCustomers();
// createRooms();