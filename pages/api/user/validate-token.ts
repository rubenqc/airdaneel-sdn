import type {NextApiRequest, NextApiResponse} from "next";
//import bcrypt from 'bcryptjs';
import {User} from "../../../entities/User";
import {jwt} from "../../../utils";
import {connection} from "../../../database/connection-db";


type Data =
    | {message: string}
    | {
    token: string;
    user: {
        email: string;
        name: string;
        role: string;
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return checkJWT(req, res)

        default:
            res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const checkJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const{token = ''} = req.cookies;

    let _id = '';

    try {
        _id = await jwt.isValidToken(token);
       // return res.status(200).json({message: userId})

    } catch (error){
        return res.status(401).json({
            message: 'Token de autorización no es válido'
        })
    }

    await connection.initialize()

    const user = await User.findOneBy({_id})

    await connection.destroy()

    if( !user ) {
        return res.status(400).json({message:'No existe usuario con ese id'})
    }

    const { email, role, name} = user;

    return res.status(200).json ({
        token,  //jwt
        user: {
            email, role, name
        }
    })

}

