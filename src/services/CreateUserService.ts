import { getRepository } from 'typeorm';
import { Usuario } from '../entities/Usuario';

//quais dados ele pode receber
interface IUsuario{
    id: string,
    nome: string,
    email?: string    
}

class CreateUserService{
    //essa função terá a responsabilidade de salvar as infor.. em nosso BD
    async execute({ id, nome, email }: IUsuario){
        const usuario = await 
            getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                {id: id, nome: nome, email: email },              

            ])
            .execute();
            console.log(usuario)
        return usuario;
    }
}


export { CreateUserService }