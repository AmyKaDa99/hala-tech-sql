import {PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm"

import {Player} from "../entities/player"

import { TeamPlayer } from "./team-player";

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  position: string;

  @OneToMany(
    () => Player,
    (player) => player.position
  )
  players: Player[];

  @OneToMany(
    () => TeamPlayer,
    (teamPlayer) => teamPlayer.player
  )
  teamPlayers: TeamPlayer[];
}
