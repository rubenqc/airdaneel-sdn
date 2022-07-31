import type {NextApiRequest, NextApiResponse} from "next";

type Data = {
    ok: boolean
    message: string;
    method: string;
    secret?: string;
}

export default function handler(
    req: NextApiRequest, res: NextApiResponse<Data>) {

    res.status(200).json({
        ok: true,
        message: 'Todo Correcto',
        method: req.method || 'no hay metodo',
    });
}
