import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Interest } from '../interest/interest.entity';
import { Org } from '../org/org.entity';

enum Term {
  OneTime = 'onetime',
  ShortTerm = 'shortterm',
  LongTerm = 'longterm',
}

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

  @ManyToMany(type => Org)
  @JoinTable()
  orgs: Org[];

  @ManyToMany(type => Interest)
  @JoinTable()
  interests: Interest[];
}
