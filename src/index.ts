import express from 'express';
import {router} from './routes';

const server = express();

//ligamos a instancia com o router.ts
server.use(router);

server.listen(5000, () => {
    console.log('Servidor on na porta 5000');
})

