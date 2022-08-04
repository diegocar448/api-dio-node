import 'reflect-metadata';
import express from 'express';
import {router} from './routes';
import createConnection from './database';

createConnection();
const server = express();

//assim ele poderá entender quando passar um json no body da requisição
server.use(express.json())
//ligamos a instancia com o router.ts
server.use(router);

server.listen(5000, () => {
    console.log('Servidor on na porta 5000');
})

