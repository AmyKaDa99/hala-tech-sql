import {PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Entity } from "typeorm";

import { Position } from "./position";

import { TeamPlayer } from "./team-player";

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: false, nullable: false })
  name: string;

  
  @ManyToOne(() => Position, (position) => position.players)
  position: Position[];

  @OneToMany(
    () => TeamPlayer,
    (teamPlayer) => teamPlayer.player
  )
  teamPlayers: TeamPlayer[];

}


// hint
// each player have one fixed position
// position can occupy many players
