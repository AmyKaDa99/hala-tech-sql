import { NextFunction, Request, Response } from "express";

import { getRepository } from "typeorm";

import { Player } from "../entities/player";

import { PlayerMatchPosition } from "../entities/player_match_position";
import { Match } from "../entities/match";
import { Position } from "../entities/position";

import { validationResult } from "express-validator"


export default class PlayerMatchPositionController {
 
    static async get(req: Request, res: Response, next: NextFunction){

        try {

            const match = req.params.id

            const playerMatchPositionRepository = getRepository(PlayerMatchPosition);

            const positions =
             await playerMatchPositionRepository.createQueryBuilder('pmp')
             .select('pmp.id, p.name, m.date, po.position')
             .innerJoin(Player, 'p', 'p.id = pmp.player')
             .innerJoin(Match, 'm', 'm.id = pmp.match')
             .innerJoin(Position, 'po', 'po.id = pmp.position')
             .where('m.id = :match', {match})
             .getRawMany()
             
             res.status(200).send(positions)
                              
            } catch (e) {

              console.log(`api, ${e}`);
              
              res.status(500).json("faild");
        }
      
  }
    
    static async add (req: Request, res: Response, next: NextFunction){

        try {

          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(422).json({
              message: "Failed",
              errors: errors.array().map((err) => err),
            });
          }

             const playerMatchPositionRepository = getRepository(PlayerMatchPosition);

              const playerMatchPosition = new PlayerMatchPosition();

              playerMatchPosition.player = req.body.playerId;
              playerMatchPosition.match = req.body.matchId;
              playerMatchPosition.position = req.body.positionId;

              await playerMatchPositionRepository.save(playerMatchPosition) 

              return res.status(201).json(playerMatchPosition) 
                              
            } catch (e) {

              console.log(`api, ${e}`);
              
              res.status(500).json("faild");
        }
      
  }

  static async update (req: Request, res: Response, next: NextFunction){

    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          message: "Failed",
          errors: errors.array().map((err) => err),
        });
      }
         const playerMatchPositionRepository = getRepository(PlayerMatchPosition);

          const id = req.body.id;
          const player = req.body.playerId;
          const match = req.body.matchId;
          const position = req.body.positionId;

          await playerMatchPositionRepository.update({id: id}, { player: player,match: match, position: position})

          return res.status(201).json("updated") 
                          
        } catch (e) {

          console.log(`api, ${e}`);
          
          res.status(500).json("faild");
    }
  
}
      
}