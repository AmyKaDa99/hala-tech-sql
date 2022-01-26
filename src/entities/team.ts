import {PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";

import { TeamPlayer } from "./team-player";

import { Match } from "./match";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: false, nullable: false })
  name: string;

  @OneToMany(
    () => TeamPlayer,
    (teamPlayer) => teamPlayer.team
  )
  teamPlayers: TeamPlayer[];

  @OneToMany(
    () => Match,
    (match) => match.teamOne
  )
  firstMatches: Match[];

  @OneToMany(
    () => Match,
    (match) => match.teamTwo
  )
  seconedMatches: Match[];
}
