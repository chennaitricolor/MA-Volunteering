import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Org {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;
}
