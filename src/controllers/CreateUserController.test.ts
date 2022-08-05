import { CreateUserController } from './CreateUserController';

describe('CreateUserController', () => {
    it('Deve retornar o id do usuario criado', () => {
        const createUserController = new CreateUserController();

        const result = createUserController.handle()
    })
})