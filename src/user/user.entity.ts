
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn , OneToOne } from 'typeorm';
import {Tutor} from '../tutor/tutor.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  profilePhoto: string;

  @Column({unique: true})
  email: string;

  @Column({type : 'varchar' , length : 500})
  hashedPassword: string;

  @Column({default : false})
  isVerified : boolean;

  @Column({unique: true})
  username: string;

  @OneToOne(type => Tutor)
  @JoinColumn()
  tutor: Tutor;

  @Column({default : false})
  isBanned : boolean;

  @Column({default : false})
  isAcceptedTerms : boolean;

  @Column({default : 0})
  balance : number;
}