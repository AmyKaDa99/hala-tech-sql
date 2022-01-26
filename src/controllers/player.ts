import { NextFunction, Request, Response } from "express";

import { getRepository } from "typeorm";

import { Player } from "../entities/player";

import { Position } from "../entities/position";

import { validationResult } from "express-validator"


export default class PlayerController {
 
    static async getAll (req: Request, res: Response, next: NextFunction){

        try {
            const playerRepository = getRepository(Player);

            const players =
             await playerRepository.createQueryBuilder('p')
             .select("p.id, p.name, po.position")
             .leftJoin(Position, 'po', 'po.id = p.position')
             .getRawMany()
           
             res.status(200).json(players)
                              
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
            const playerRepository = getRepository(Player);

              const player = new Player();

              player.name = req.body.name;

              player.position = req.body.positionId

              await playerRepository.save(player) 

              return res.status(201).json(player) 
                              
            } catch (e) {

              console.log(`api, ${e}`);
              
              res.status(500).json("faild");
        }
      
  }

  static async update (req: Request, res: Response, next: NextFunction){
   
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          message: "Failed",
          errors: errors.array().map((err) => err),
        });
      }
    try {
        const playerRepository = getRepository(Player);

          const id = req.body.id;
        
          const name = req.body.name;

          const position = req.body.positionId

          await playerRepository.update({id: id}, {name: name, position: position}) 

          return res.status(200).json("updated") 
                          
        } catch (e) {

          console.log(`api, ${e}`);
          
          res.status(500).json("faild");
    }
  
  }
      
}