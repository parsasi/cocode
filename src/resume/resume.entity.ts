
import { Entity, Column, PrimaryGeneratedColumn , OneToMany , CreateDateColumn , JoinColumn, ManyToOne } from 'typeorm';
import { Tutor } from '../tutor/tutor.entity'

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable : false})
  title : string;

  @Column()
  description : string;

  @Column()
  organization : string;

  @Column()
  endYear : number;
  
  @Column()
  startYear : number;

  @ManyToOne(type => Tutor , tutor => tutor.resumes)
  tutor : Tutor;
}