const person = {
      lastName: 'Riemke', 
      firstName: 'Thorsten',
        age: 25
    }
    
    function printPerson({firstName, lastName}) {
     console.log('Hallo '+firstName+ ' '+lastName)
    }
    
    printPerson(person)