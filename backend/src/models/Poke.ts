import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("pokes")
class Poke{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
}

export {Poke}