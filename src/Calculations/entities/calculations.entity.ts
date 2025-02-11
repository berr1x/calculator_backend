import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Calculations {

    // вообще в целом не обязательно проставлять значения я думаю для каждой колонки, если это не дата
    // ведь если поставить expression: string - он сразу поставит varchar, а если нужен int, то указав, что это number, он сразу поставит тип int4
    // скорее тут это просто для читабельности

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    expression: string;

    @Column("float")
    result: number;

    @CreateDateColumn()
    date: Date;
}
