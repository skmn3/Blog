import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PoroStatus } from "./poro.status";

@Entity()
export class Poro extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    Hashtag: string;

    @Column()
    status: PoroStatus;
}