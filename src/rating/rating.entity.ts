import { Entity, Column, PrimaryGeneratedColumn , OneToMany , JoinColumn } from 'typeorm';
import { User } from '../user/user.entity'
import { Tutor } from '../tutor/tutor.entity'

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => User , user => user.id)
  @JoinColumn()
  user: User;

  @OneToMany(type => Tutor , tutor => tutor.id)
  @JoinColumn()
  tutor: Tutor;

  @Column({type:'tinyint'})
  score: number;

  @Column()
  text: string;
}