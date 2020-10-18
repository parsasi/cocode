
import { Entity, Column, PrimaryGeneratedColumn , OneToMany , UpdateDateColumn , JoinColumn } from 'typeorm';
import { User } from '../user/user.entity'
import { Session } from '../session/session.entity'

@Entity()
export class Attend {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Session , session => session.id)
  @JoinColumn()
  session : Session;

  @OneToMany(type => User , user => user.id)
  @JoinColumn()
  user : User;

  @Column()
  @UpdateDateColumn()
  timeAttended : Date;

  @Column({ default : false})
  isAttended : boolean;

}