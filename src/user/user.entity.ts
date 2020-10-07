
import { Entity, Column, PrimaryGeneratedColumn , ManyToMany , JoinTable , OneToOne } from 'typeorm';
import { Category } from '../category/category.entity'
import { Tutor } from './tutor.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable : false})
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  profilePhoto: string;

  @Column({unique: true , nullable : false})
  email: string;

  @Column({type : 'varchar' , length : 500 , nullable : false})
  hashedPassword: string;

  @Column({default : false})
  isVerified : boolean;

  @Column({unique: true , nullable : false})
  username: string;

  @Column({default : false})
  isBanned : boolean;

  @Column({default : false})
  isAcceptedTerms : boolean;

  @Column({default : 0})
  balance : number;

  @ManyToMany(type => Category)
  @JoinTable()
  categories: Category[]

  @OneToOne(type => Tutor , tutor => tutor.user)
  tutor : Tutor;

}