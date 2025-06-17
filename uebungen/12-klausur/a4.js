const person={
    name: 'Horst',
    vorname: 'Horstmann',
    alter: 24,
    ausgeben: function(){
        console.log(this.name, this.vorname, this.alter )
    }
}
// person.ausgeben()