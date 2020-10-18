
import { Entity, Column, PrimaryGeneratedColumn , CreateDateColumn, Double , ManyToOne } from 'typeorm';
import { User } from './user.entity'

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @ManyToOne(type => User , user =>  user.transactions)
  user: User;

  @CreateDateColumn()
  date : Date;

  @Column({type : 'double'})
  amount : Double;
}