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
                {id: "91e3a617-ffea-4c77-9ca7-63be384ed489", nome: "Ubuntu Machine", email: "ubuntumachine@ubuntu.com" },                
            ])
            .execute();
            console.log(usuario)
        return usuario;
    }
}


export { CreateUserService }