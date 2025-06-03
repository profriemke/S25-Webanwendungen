import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class PostsController {

    public async home({ view, session }: HttpContext){
        const posts = await db.from('posts').select('*').orderBy('id', 'desc')    
        return view.render('pages/home', { posts, user: session.get('user') })
    }
    public async create({ view, session, response} :HttpContext  ){
    
        if(!session.get('user')){
          return response.redirect('/login')
        }
    return view.render('pages/admin_post_create')

}

}