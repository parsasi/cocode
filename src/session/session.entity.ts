
import { Entity, Column, PrimaryGeneratedColumn , OneToMany , CreateDateColumn , JoinColumn } from 'typeorm';
import { Tutor } from '../tutor/tutor.entity'
import { User } from '../user/user.entity'
import { Category } from '../category/category.entity'

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable : false})
  uuid : string;

  @Column({type : 'datetime'})
  startTime : Date;

  @OneToMany(type => Category , category => category.id)
  @JoinColumn()
  category : Category;

  @OneToMany(type => Tutor , tutor => tutor.id)
  @JoinColumn()
  tutor : Tutor;

  @Column()
  @CreateDateColumn()
  timeSent : Date;

  @Column({default : false})
  isStarted : boolean;

  @Column({default : false})
  isEnded : boolean;

  @Column()
  rate : number;

  @Column()
  codejarAdminUrl : string;

  @Column()
  codejarPublicUrl : string;

}