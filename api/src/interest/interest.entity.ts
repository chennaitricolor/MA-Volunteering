import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Interest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;
}
