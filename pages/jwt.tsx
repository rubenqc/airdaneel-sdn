import jwt from 'jsonwebtoken';

export const signToken = (name: string, email: string) => {
 if (!process.env.JWT_SECRET_SEED) {
     throw new Error('No hay secret key de JWT - Revisar variables de entorno');
 }

 jwt.sign(
     //payload
     {name,email},

     //seed
    process.env.JWT_SECRET_SEED,

     {expiresIn: '30d'})
}