import {
  Entity,
  Column,
  PrimaryColumn,
  Generated,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Interest } from '../interest/interest.entity';
import { Term } from '../types';

@Entity()
export class Volunteer {
  @Column({ unique: true })
  @Generated('increment')
  id: number;

  @PrimaryColumn('text')
  phone: string;

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

  @Column('text')
  prevOrg: string;

  @ManyToMany(type => Interest, { cascade: true })
  @JoinTable({
    name: 'volunteer_interest_xref',
    joinColumn: {
      name: 'volunteer',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'interest',
      referencedColumnName: 'id',
    },
  })
  interests: Interest[];
}
