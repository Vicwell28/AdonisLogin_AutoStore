/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.resource("/User", "UsersController").apiOnly()


Route.post('/login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    const token = await auth.use('api').attempt(email, password)

    await auth.use('api').attempt(email, password, {
      expiresIn: '7days'
    })

    return token
  } catch {
    return response.badRequest('Invalid credentials')
  }
})




Route.get('/dashboard', async ({ auth }) => {
  console.log(auth)
  
  const u = await auth.use('api').authenticate()
  console.log(u)
  // ✅ Request authenticated
  //console.log(auth.user!)
})





Route.post('/logout', async ({ auth, response }) => {
  await auth.use('api').revoke()
  console.log(auth)
  return {
    revoked: true, 
  }
})