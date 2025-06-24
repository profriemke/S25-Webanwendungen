let person= { 
    name:"Riemke", 
    vorname:"Thorsten",
    adressen: [
        {
            strasse: "Nobelstr. 12",
            plz: "70569",
            ort: "Stuttgart"
        },
        {
            strasse: "Kleingasse 3",
            plz: "08153",
            ort: "Weitwegdorf"
        }
    ]   
}

console.log(person.name)
console.log(person.adressen[1].ort)