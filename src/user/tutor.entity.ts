
import { Entity, Column, PrimaryGeneratedColumn , OneToOne , JoinColumn , ManyToMany , JoinTable } from 'typeorm';
import { User } from './user.entity'
import { Category } from '../category/category.entity'

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

  @ManyToMany(type => Category)
  @JoinTable()
  categories: Category[]
}