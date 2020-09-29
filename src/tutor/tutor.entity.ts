
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}