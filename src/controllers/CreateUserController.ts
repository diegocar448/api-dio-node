import {Request, Response} from 'express';

class CreateUserController {
    handle(request:Request, response: Response){
        const nome = request.body.nome

        return response.json({mensagem: `Usuario ${nome} criado`})
    }

}


export {CreateUserController}