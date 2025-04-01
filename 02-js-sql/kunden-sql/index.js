const Database = require('better-sqlite3');
const db = new Database('./kunde.sqlite');

const getAllKunden = db.prepare('SELECT vorname, nachname FROM kunde LIMIT 5')

const kunden = getAllKunden.all()

console.log(kunden)


