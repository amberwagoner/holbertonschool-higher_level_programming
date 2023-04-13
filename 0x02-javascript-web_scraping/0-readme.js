#!/usr/bin/node
// Task 0
const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});