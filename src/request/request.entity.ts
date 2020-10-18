
import { Entity, Column, PrimaryGeneratedColumn , OneToMany , CreateDateColumn , JoinColumn } from 'typeorm';
import { Tutor } from '../tutor/tutor.entity'
import { User } from '../user/user.entity'
import { Category } from '../category/category.entity'
import { Session } from '../session/session.entity'

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default : false})
  isAccepted : boolean;

  @Column({default : false})
  isClosed : boolean;

  @OneToMany(type => Category , category => category.id)
  @JoinColumn()
  category : Category;

  @OneToMany(type => Tutor , tutor => tutor.id)
  @JoinColumn()
  tutor : Tutor;

  @OneToMany(type => User , user => user.id)
  @JoinColumn()
  user : User;

  @Column()
  @CreateDateColumn()
  timeSent : Date;

  @OneToMany(type => Session , session => session.id)
  @JoinColumn()
  session : Session;

}