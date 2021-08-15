import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  gender: string;

  @Column({ type: 'int' })
  age: number;
}
