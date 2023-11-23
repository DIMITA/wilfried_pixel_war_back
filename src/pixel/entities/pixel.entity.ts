import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pixel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  color: string;

  @Column()
  coordx: number;

  @Column()
  coordy: number;
}
