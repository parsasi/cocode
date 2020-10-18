
import { Entity, Column, PrimaryGeneratedColumn , OneToOne , JoinColumn  , CreateDateColumn} from 'typeorm';
import { Attend } from '../attend/attend.entity'

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Attend , {eager : true})
  @JoinColumn()
  attend: Attend;

  @Column()
  @CreateDateColumn()
  timeCreated : Date;


  @Column()
  amount : number;
}