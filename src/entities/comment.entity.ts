import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user.entity"
import { Topic } from "./topic.entity"

@Entity('Comment')
export class Comment{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    text:number

    @ManyToOne(type=>User, (user)=>user.comments)
    user:User

    @ManyToOne(type=>Topic, (topic)=>topic.comments)
    topic:Topic

}