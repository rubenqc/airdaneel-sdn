import bcrypt from 'bcryptjs';

interface SeedUser {
    name    : string;
    email   : string;
    password: string;
    role    : 'admin'| 'client'
}

interface SeedData {
    users: SeedUser[];
}

export const initialData: SeedData = {
    users: [
        {
            name    : 'Will Pilares',
            email   : 'willpilares@promitia.com',
            password: bcrypt.hashSync('123456'),
            role    : 'admin'
        },
        {
            name    : 'Ruben Quispe',
            email   : 'rubenquispe@promitia.com',
            password: bcrypt.hashSync('123456'),
            role    : 'client'
        },
    ]
}