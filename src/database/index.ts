import { Connection, createConnection, getConnection } from 'typeorm';

export default async(): Promise<Connection> => (){
    const defaultOption = await getConnection();
    return createConnection(
        //vai devolver para nossa conexão os padrões de criar nossa conexão
        Object.assign(defaultOption)
    )
}