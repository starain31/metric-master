
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level: string;

  @Column()
  label: string;

  @Column()
  message: string;

  @Column()
  timestamp: string;
}