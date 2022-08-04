import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async(): Promise<Connection> => {
    
    const defaultOption = await getConnectionOptions();    
    return createConnection(
        //vai devolver para nossa conexão os padrões de criar nossa conexão
        Object.assign(defaultOption)
    )
}