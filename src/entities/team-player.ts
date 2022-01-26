import {PrimaryGeneratedColumn, ManyToOne, Entity } from "typeorm";

import { Team } from "./team";

import { Player } from "./player";

@Entity()
export class TeamPlayer {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Team, (team) => team.teamPlayers)
  team: Team[];

  @ManyToOne(() => Player, (player) => player.teamPlayers)
  player: Player[];
}