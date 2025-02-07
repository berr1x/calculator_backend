import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Calculations {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    expression: string;

    @Column("float")
    result: number;

    @Column()
    date: string;
}
