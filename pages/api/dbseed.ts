import {NextApiRequest, NextApiResponse} from "next";
//import {User} from "../../entities/User";
import {connection} from "../../database/connection-db";

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest, res: NextApiResponse<Data>) {

    if ( process.env.NODE_ENV === 'production') {
        return res.status(401).json({message: 'No tiene acceso a este servicio'})
    }

    await connection.initialize();

    res.status(200).json({message:'Proceso realizado correctamente'});
}