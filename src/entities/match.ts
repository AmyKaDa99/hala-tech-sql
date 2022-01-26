import {PrimaryGeneratedColumn, ManyToOne, OneToMany, Entity, Column } from "typeorm";

import { Team } from "./team";

import { TeamPlayer } from "./team-player";

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Team, (team) => team.firstMatches)
  teamOne: Team[];

  @ManyToOne(() => Team, (team) => team.seconedMatches)
  teamTwo: Team[];

  @Column({ unique: false, nullable: false })
  date: Date;

  @OneToMany(
    () => TeamPlayer,
    (teamPlayer) => teamPlayer.player
  )
  teamPlayers: TeamPlayer[];
}