
import { Entity, Column, PrimaryGeneratedColumn , OneToMany , CreateDateColumn, Double , JoinColumn } from 'typeorm';
import { User } from './user.entity'

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @OneToMany(type => User , user =>  user.id)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  date : Date;

  @Column({type : 'double'})
  amount : Double;
}