import { NextFunction, Request, Response } from "express";

import { getRepository } from "typeorm";

import { Player } from "../entities/player";

import { Team } from "../entities/team";

import { TeamPlayer } from "../entities/team-player";

import { validationResult } from "express-validator"


export default class TeamPlayerController {
 
    static async getAll (req: Request, res: Response, next: NextFunction){

        try {

            const id = req.params.id
            const teamPlayerRepository = getRepository(TeamPlayer);

            const team =
             await teamPlayerRepository.createQueryBuilder('tp')
             .select('tp.id, t.name, p.name')
             .leftJoin(Player, 'p', 'p.id = tp.player')
             .leftJoin(Team, 't', 't.id = tp.team')
             .where('t.id = :id ', {id})
             .getRawMany()
             
             res.status(200).send(team)
                              
            } catch (e) {

              console.log(`api, ${e}`);
              
              res.status(500).json("faild");
        }
      
  }
    
    static async add (req: Request, res: Response, next: NextFunction){
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          message: "Failed",
          errors: errors.array().map((err) => err),
        });
      }
        try {

             const teamPlayerRepository = getRepository(TeamPlayer);

              const teamPlayer = new TeamPlayer();

              teamPlayer.player = req.body.playerId;
              teamPlayer.team = req.body.teamId

              await teamPlayerRepository.save(teamPlayer) 

              return res.status(201).json(teamPlayer) 
                              
            } catch (e) {

              console.log(`api, ${e}`);
              
              res.status(500).json("faild");
        }
      
  }
      
}