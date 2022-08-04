
//quais dados ele pode receber
interface IUsuario{
    nome: string,
    email: string    
}

class CreateUserService{
    //essa função terá a responsabilidade de salvar as infor.. em nosso BD
    execute({ nome, email }: IUsuario){
        const data = [];

        data.push({nome, email})

        return data;
    }
}


export { CreateUserService }