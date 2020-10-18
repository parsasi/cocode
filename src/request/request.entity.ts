
import { Entity, Column, PrimaryGeneratedColumn , OneToMany , CreateDateColumn , JoinColumn  , ManyToOne} from 'typeorm';
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

  @ManyToOne(type => Category , category => category.requests)
  category : Category;

  @ManyToOne(type => Tutor , tutor => tutor.requests)
  tutor : Tutor;

  @ManyToOne(type => User , user => user.requests)
  user : User;

  @Column()
  @CreateDateColumn()
  timeSent : Date;

  @ManyToOne(type => Session , session => session.requests)
  session : Session;

}