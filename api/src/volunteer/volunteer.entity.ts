import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Interest } from '../interest/interest.entity';
import { Org } from '../org/org.entity';
import { Term } from '../types';

@Entity()
export class Volunteer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  email: string;

  @Column('boolean')
  notifyFlag: boolean;

  @Column({
    type: 'enum',
    enum: Term,
    default: Term.OneTime,
  })
  term: Term;

  @ManyToMany(type => Org, { cascade: true })
  @JoinTable()
  orgs: Org[];

  @ManyToMany(type => Interest, { cascade: true })
  @JoinTable()
  interests: Interest[];
}
