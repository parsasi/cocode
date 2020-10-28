import { Entity, Column, PrimaryGeneratedColumn , ManyToOne } from 'typeorm';
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

  @Column({default : "EXPERIENCE"})
  type : string;

  @Column()
  endYear : number;
  
  @Column()
  startYear : number;

  @ManyToOne(() => Tutor , tutor => tutor.resumes)
  tutor : Tutor;
}