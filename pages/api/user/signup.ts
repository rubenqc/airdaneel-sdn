import type {NextApiRequest, NextApiResponse} from "next";
import bcrypt from 'bcryptjs';
//import {db } from "../../../database";
import {jwt,validations} from "../../../utils";
import {connection} from "../../../database/connection-db";
import {User} from "../../../entities/User";



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
            return registerUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const{email, password,name} = req.body as {email: string, password: string, name: string};

    if (!validations.isValidPassword(password)) {
        return res.status(400).json({
            message: 'La contraseña debe ser de 6 caracteres y contener al menos un numero'
        });
    }
    if (name.length < 2) {

        return res.status(400).json({
            message: 'El nombre debe de ser de 2 caracteres'
        });
    }

    if(!validations.isValidEmail(email)) {
        return res.status(400).json({
            message: 'Ingrese una dirección de correo valida'
        })
    }


    await connection.initialize();
    const user = await User.findOneBy({email});

    if ( user) {
        return res.status(400).json(({
            message: 'No puede usar ese correo'
        }))
    }

    const newUser = new User();

    newUser.email = email.toLowerCase();
    newUser.password = bcrypt.hashSync(password);
    newUser.role = 'client';
    newUser.name = name;

    try {
        await newUser.save();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        })
    }

    await connection.destroy();

    const {_id, role} = newUser;

    const token: string = jwt.signToken(_id, email);

    return res.status(200).json ({
        token,  //jwt
        user: {
            email, role, name
        }
    })



}

