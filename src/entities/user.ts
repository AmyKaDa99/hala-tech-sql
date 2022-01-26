import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()

export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false, nullable: false })
    username: string;

    @Column({ unique: false, nullable: false })
    password: string;
}

