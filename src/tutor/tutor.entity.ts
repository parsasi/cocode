
import { Entity, Column, PrimaryGeneratedColumn , OneToOne , JoinColumn , ManyToMany , JoinTable , OneToMany } from 'typeorm';
import { User } from '../user/user.entity'
import { Category } from '../category/category.entity'
import { Rating } from '../rating/rating.entity'
import { Session } from '../session/session.entity'
import { Request } from '../request/request.entity'

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type : 'text'})
  bioText: string;

  @Column({default : 0})
  hourlyRate: number;

  @Column()
  socialUrl : string;

  @Column()
  profileTitle : string;

  @Column()
  profileVideo : string;

  @OneToOne(type => User , {eager : true})
  @JoinColumn()
  user: User;

  @ManyToMany(type => Category , {eager : true})
  @JoinTable()
  categories: Category[]

  @OneToMany(() => Rating, rating => rating.tutor)
  ratings : Promise<Rating[]>

  @OneToMany(() => Session, session => session.tutor)
  sessions : Promise<Session[]>

  @OneToMany(() => Request, request => request.tutor)
  requests : Promise<Request[]>
}