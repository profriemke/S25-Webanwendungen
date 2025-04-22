/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

let count =0
const pizzaVote={
    ja: 0,
    nein: 0,
    vielleicht: 0
}

router.get('/kunde', async({view})=>{
    const kunden = await  db.from('kunde')
                            .select('vorname', 'nachname', 'email')
                            .where({ort:'Stuttgart', vorname: 'Nhi'})
                            .limit(10)
    return view.render('pages/kunde',{kunden: kunden})
})

router.get('/count', async ({ view})=>{
    count++
    return view.render('pages/count', {count})
})

router.post('/pizzavote/ergebnis', async({view, request})=>{
    const vote = request.input('vote')
    if(!vote){
        return 'Fehler'
    }
    if(vote == 'ja'){
        pizzaVote.ja++
    }
    if(vote == 'nein'){
        pizzaVote.nein++
    }
    if(vote == 'vielleicht'){
        pizzaVote.vielleicht++
    }

    return view.render('pages/pizzavote_ergebnis', pizzaVote)
})
router.get('/pizzavote', async({ view })=>{
    return view.render('pages/pizzavote')
})

router.get('/nutzer', async ({ view })=>{
    return view.render('pages/nutzer')
})

router.post('/nutzer/anzeige', async ({view, request})=>{
    let daten = { vorname: request.input('vorname'),
                  nachname: request.input('nachname')}    
    console.log(daten)          
    return view.render('pages/anzeige', daten)
})

router.get('/', async ({ view })=>{ 
    const state = {gruss: 'Guten Mittag', namen: ['Lisa', 'Paul', 'Malte', 'Klaus']}
    console.log(await view.render('pages/meinStart', state))
    return view.render('pages/meinStart', state)
})

router.get('/personen', async ({ view })=>{
    const data = {
        isLoggedIn: true,
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