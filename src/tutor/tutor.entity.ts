
import { Entity, Column, PrimaryGeneratedColumn , OneToOne , JoinColumn } from 'typeorm';
import {User} from '../user/user.entity'

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


  @OneToOne(type => User)
  @JoinColumn()
  user: User;
}