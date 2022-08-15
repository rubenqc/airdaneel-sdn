import type {NextApiRequest, NextApiResponse} from "next";
import "reflect-metadata"
import bcrypt from 'bcryptjs';
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
        case 'POST':
            return loginUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const {email = '', password = ''} = req.body;

    await connection.initialize();
    const user = await User.findOneBy({email});
    await connection.destroy();

    if(!user) {
        return res.status(400).json({message:'Correo o constraseña no validos - EMAIL'})
    }

    if(!bcrypt.compareSync(password, user.password)){
        return res.status(400).json({message:'Correo o constraseña no validos - PASSWORD'})
    }

    const {_id, role, name} = user;

    const token: string = jwt.signToken(_id, email);

    return res.status(200).json({
        token,
        user: {
            email, role, name
        }
    })




}