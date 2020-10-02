
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({default : false})
  isBanned : boolean;

  @Column({default : false})
  isAcceptedTerms : boolean;

  @Column({default : 0})
  balance : number;
}