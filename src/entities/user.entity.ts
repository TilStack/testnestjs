import { Entity,PrimaryGeneratedColumn,Column, BeforeInsert, OneToMany } from "typeorm";
import * as bcrypt from "bcrypt";
import { Comment } from "./comment.entity";

@Entity("users")
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true,nullable:false})
    name:string

    @Column({nullable:false,unique:true})
    email:string

    @Column({nullable:false})
    password:string

    @BeforeInsert()
    async hashPassword(){
        this.password=await bcrypt.has(this.password, 10)
    }
    @OneToMany(type=>Comment, (comment)=>comment.user)
    comments:Comment[]
}