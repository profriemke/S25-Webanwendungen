/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async ({ view })=>{ 
    const state = {gruss: 'nabend'}
    return view.render('pages/meinStart', state)
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