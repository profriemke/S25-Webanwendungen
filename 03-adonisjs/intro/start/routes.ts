/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/nutzer', async ({ view })=>{
    return view.render('pages/nutzer')
})

router.post('/nutzer/anzeige', async ({view, request})=>{
    let daten = { vorname: request.input('vorname'),
                  nachname: request.input('nachname')}              
    return view.render('pages/anzeige', daten)
})

router.get('/', async ({ view })=>{ 
    const state = {gruss: 'Guten Mittag', namen: ['Lisa', 'Paul', 'Malte']}
    console.log(await view.render('pages/meinStart', state))
    return view.render('pages/meinStart', state)
})

router.get('/personen', async ({ view })=>{
    const data = {
        isLoggedIn: false,
        personen:[
        {nachname:'Müller', vorname:'Malte'},
        {nachname:'Lauer', vorname:'Lisa'},
        {nachname:'Summ', vorname:'Sanja'}
    ] }
    return view.render('pages/personen', data)
})


router.get('/omm', async ()=>{
    return 'Beschte wo gibt'
})

router.get('/context', async (ctx)=>{
    return ctx
})

router.get('/impressum', async ({ view })=>{
    return view.render('pages/impressum')
})