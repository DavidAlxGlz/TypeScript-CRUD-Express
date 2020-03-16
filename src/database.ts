import { createPool } from 'mysql2/promise';

export async function connect(){

    const connection = await createPool({

        host: 'b3hedrxtj790tlyq8qnp-mysql.services.clever-cloud.com',
        user: 'u3zm1jhbmbwfd6nx',
        password: 'uCLyq9Y6SOeTsZJ3D4cW',
        database: 'b3hedrxtj790tlyq8qnp',
        connectionLimit: 10

    })

    return connection;

}