import {PrimaryGeneratedColumn, ManyToOne, Entity } from "typeorm";

import { Player } from "./player";

import { Match } from "./match";

import { Position } from "./position";

@Entity()
export class PlayerMatchPosition {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Player, (player) => player.teamPlayers)
  player: Player[];

  @ManyToOne(() => Match, (match) => match.teamPlayers)
  match: Match[];

  @ManyToOne(() => Position, (position) => position.teamPlayers)
  position: Position[];
}