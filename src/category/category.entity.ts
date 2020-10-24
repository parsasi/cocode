
import { Entity, Column, PrimaryGeneratedColumn , OneToMany } from 'typeorm';
import { Session } from '../session/session.entity'
import { Request } from '../request/request.entity'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true , nullable : false})
  text: string;

  @Column()
  photo: string;

  @OneToMany(() => Session, session => session.category)
  sessions : Session[]

  @OneToMany(() => Request, request => request.category)
  requests : Request[]
}