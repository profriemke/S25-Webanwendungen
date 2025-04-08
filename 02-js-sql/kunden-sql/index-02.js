const Database = require('better-sqlite3');
const db = new Database('./kunde.sqlite');

const limit = 10

const getAllKunden = db.prepare('SELECT vorname, nachname FROM kunde  ORDER BY kundennr DESC LIMIT ?')

let kunden = getAllKunden.all(limit)

console.log(kunden[2].vorname)
// let kunde = kunden[2]
//console.log(kunde.vorname)

console.log(kunden[2].nachname)


