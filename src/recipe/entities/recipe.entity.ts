import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recipes')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  constructor(partial: Partial<Recipe>) {
    Object.assign(this, partial);
  }
}
