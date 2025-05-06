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
import hash from '@adonisjs/core/services/hash'


router.get('/', async ({ view, session })=>{
    const posts = await db.from('posts').select('*').orderBy('id', 'desc')    
    return view.render('pages/home', { posts, user: session.get('user') })
})

router.get('/about', async({ view })=>{
    return view.render('pages/about')
})

router.get('/admin/post/create', async ({ view, session, response  })=>{
    if(!session.get('user')){
        return response.redirect('/login')
    }
    return view.render('pages/admin_post_create')

})

router.post('/admin/post/create', async ({ request, response, session })=>{
    if(!session.get('user')){
        return response.redirect('/login')
    }
    const result = await  db.table('posts')
                            .insert({
                                title: request.input('title'),
                                teaser: request.input('teaser'),
                                text: request.input('text'),
                                date: new Date().toString(),
                                author: session.get('user').login
                            })
    return response.redirect('/')
})

router.get('/admin/post/edit/:id', async ({ view, params, response, session })=>{
    if(!session.get('user')){
        return response.redirect('/login')
    }
    const post = await db.from('posts')
                        .select('*')
                        .where('id', params.id)
                        .first()
    if(!post){
        return response.redirect('/')
    }
    return view.render('pages/admin_post_edit', post)
})

router.post('/admin/post/edit', async({ request, response, session })=>{
    if(!session.get('user')){
        return response.redirect('/login')
    }
    const result = await db.from('posts')
                            .where('id',request.input('id') )
                            .update({
                                title: request.input('title'),
                                teaser: request.input('teaser'),
                                text: request.input('text')
                            })
    if(!result){
        return 'Fehler'
    }
    return response.redirect('/post/'+request.input('id'))

})

router.get('/post/:id', async ({ view, params, response, session, })=>{
    const post = await db.from('posts')
                         .select('*')
                         .where('id', params.id)
                         .first()
    if(!post){
        return response.redirect('/')
    }
    const author = await db.from('users')
                            .select('*')
                            .where({login: post.author})
                            .first()
     return view.render('pages/post', {post, firstname:author.firstname, lastname:author.lastname, user: session.get('user')})                       
})

// Login & Logout

router.get('/login', async ({ view })=>{
    return view.render('pages/login')
})

router.post('/login', async ({ request, response, session })=>{
    const result = await db.from('users')
                            .select('*')
                            .where({
                                login: request.input('login'),
                            })
                            .first()
    if(!result){
        return response.redirect('/login')
    }
    if( await hash.verify(result.password, request.input('password'))){
            session.put('user', {
            login: result.login,
            firstname:result.firstname,
            lastname: result.lastname
        })
        console.log(session.get('user'))
        return response.redirect('/')
    }
    return response.redirect('/login')
    
})

router.get('/logout', async ({ session, response })=>{
    session.forget('user')
    return response.redirect('/')
})

// Session Demo

router.get('/session/a', async({ session })=>{
    session.put('text', 'Hallo')
    return 'Wert gesetzt'
})

router.get('/session/b', async({ session })=>{
    return session.get('text')
})

router.get('/count', async ({session})=>{
    if(session.get('count')=== undefined){
        session.put('count', 1)
    }else{
        session.put('count', session.get('count') +1)
    }
    return session.get('count')
})

router.get('/hash', async ()=>{
    const h = await hash.make('123')
    return h
})