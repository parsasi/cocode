import { Entity, Column, PrimaryGeneratedColumn , ManyToOne , JoinColumn } from 'typeorm';
import { User } from '../user/user.entity'
import { Tutor } from '../tutor/tutor.entity'

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.ratings)
  user: User;

  @ManyToOne(() => Tutor, tutor => tutor.ratings)
  tutor: Tutor;

  @Column({type:'tinyint'})
  score: number;

  @Column()
  text: string;
}