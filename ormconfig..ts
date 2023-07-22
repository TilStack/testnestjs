import { Topic } from "src/entities/topic.entity";
import { User } from "src/entities/user.entity";
import {Comment} from "src/entities/comment.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const config:PostgresConnectionOptions={
    type: "postgres",
    database: "testdb",
    host: "localhost",
    port:5432,
    username: "postgres",
    password: "root",
    entities: {User,Topic,Comment},
    synchronize: true,
}

 
export default config