
import { Entity, Column, PrimaryGeneratedColumn , OneToMany , UpdateDateColumn , JoinColumn, ManyToOne, ManyToMany } from 'typeorm';
import { User } from '../user/user.entity'
import { Session } from '../session/session.entity'

@Entity()
export class Attend {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Session , session => session.attends)
  session : Session;

  @ManyToOne(type => User , user => user.attends)
  user : User;

  @Column()
  @UpdateDateColumn()
  timeAttended : Date;

  @Column({ default : false})
  isAttended : boolean;

}