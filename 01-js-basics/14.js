const person = {
      lastName: 'Riemke', 
      firstName: 'Thorsten',
      write: function() {
        console.log(`Name: ${this.firstName} ${this.lastName}`)
      }
    }
    person.write()