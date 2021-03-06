import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {

  }

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    
    const user = new User()
    user.email = request.input('email')
    user.password = request.input('password')
    user.save()
    console.log(user)
    console.log("Paso Por Aqui")
    return user
  }

  public async cargarImg({request, response, params}:HttpContextContract){

    const coverImage = request.file('img', {
      size: '2mb',
      extnames: ['jpg', 'png', 'gif'],
    })

    //const nombreArchivo = params.id + "." + coverImage.extname;
    
  }

  public async show({}: HttpContextContract) {

  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {

  }
}
