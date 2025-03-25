
function sagHallo(){
    console.log('Hallo ')
}
function sagName(name){
    console.log('Hallo '+name)
}

function add(a, b){
    return a+b
    return a-b // wird nicht ausgeführt
}

sagHallo()
sagName('Fred')

console.log(add(2,3))

console.log(add(3,add(5,6)))
