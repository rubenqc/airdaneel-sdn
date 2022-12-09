import {DataSource} from "typeorm"
import {User} from "../entities/User"

export const connection = new DataSource({
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: "postgres",
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [User],
        synchronize: true
    })





