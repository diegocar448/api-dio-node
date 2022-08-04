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
                {id: "cbb27220-70cf-4c26-81d6-5f75fa51f38e", nome: "Pensamento Ubuntu", email: "pensar@ubuntu.com" },                
            ])
            .execute();
            console.log(usuario)
        return usuario;
    }
}


export { CreateUserService }