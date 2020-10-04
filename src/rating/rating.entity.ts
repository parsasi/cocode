import { Entity, Column, PrimaryGeneratedColumn , OneToMany , JoinColumn } from 'typeorm';
import { User } from '../user/user.entity'

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => User , user => user.id)
  @JoinColumn()
  ratorUser: User;

  @OneToMany(type => User , user => user.id)
  @JoinColumn()
  ratedUser: User;

  @Column({type:'tinyint'})
  rate: number;

  @Column()
  text: string;
}