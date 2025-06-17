import Route from '@ioc:Adonis/Core/Route'

router.get('/eingabe', async({view})=>{
    return view.render('eingabe')
})

router.post('/ausgabe', async ({view,request})=>{
    const a = request.input('a')
    const b = request.input('b')
    const ergebnis = parseInt(a)+ parseInt(b)
    return view.render('ausgabe',{ergebnis: ergebnis})
})