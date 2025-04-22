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


router.get('/', async ({ view })=>{
    const posts = await db.from('posts').select('*').orderBy('id', 'desc')    
    return view.render('pages/home', { posts })
})

router.get('/admin/post/create', async ({ view })=>{
    return view.render('pages/admin_post_create')

})

router.post('/admin/post/create', async ({ request, response })=>{
    const result = await  db.table('posts')
                            .insert({
                                title: request.input('title'),
                                teaser: request.input('teaser'),
                                text: request.input('text'),
                                date: new Date().toString()
                            })
    return response.redirect('/')
})

router.get('/post/:id', async ({ view, params})=>{
    const post = await db.from('posts')
                         .select('*')
                         .where('id', params.id)
                         .first()
     return post                    
})