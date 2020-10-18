
import { Entity, Column, PrimaryGeneratedColumn , OneToMany , CreateDateColumn , JoinColumn, ManyToOne } from 'typeorm';
import { Tutor } from '../tutor/tutor.entity'
import { Category } from '../category/category.entity'
import { Attend } from '../attend/attend.entity'
import { Request } from '../request/request.entity'

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable : false})
  uuid : string;

  @Column({type : 'datetime'})
  startTime : Date;

  @ManyToOne(type => Category , category => category.sessions)
  category : Category;

  @ManyToOne(type => Tutor , tutor => tutor.sessions)
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

  @OneToMany(() => Attend, attend => attend.session)
  attends : Attend[];

  @OneToMany(() => Request, request => request.session)
  requests : Request[]

}