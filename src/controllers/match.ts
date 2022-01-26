import { NextFunction, Request, Response } from "express";

import { getRepository } from "typeorm";

import { Match } from "../entities/match";

import { Team } from "../entities/team";

import { validationResult } from "express-validator"


export default class MatchController {
 
    static async getAll (req: Request, res: Response, next: NextFunction){

        try {

            const matchRepository = getRepository(Match);

            const matches =
             await matchRepository.createQueryBuilder('m')
             .select("m.id, t1.name as team1_name, t2.name as team2_name, m.date")
             .innerJoin(Team, 't1', 't1.id = m.teamOne' )
             .innerJoin(Team, 't2', 't2.id = m.teamTwo' )
             .getRawMany()
           
             res.status(200).json(matches)
                              
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

              const matchRepository = getRepository(Match);

              const match = new Match();

              match.teamOne = req.body.teamOneId;

              match.teamTwo = req.body.teamTwoId;

              match.date = req.body.date

              await matchRepository.save(match) 

              return res.status(201).json(match) 
                              
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

          const matchRepository = getRepository(Match);

          const id = req.body.id;

          const teamOne = req.body.teamOneId;

          const teamTwo = req.body.teamTwoId;

          const date = req.body.date
    

          await matchRepository.update({id: id}, {teamOne: teamOne, teamTwo: teamTwo, date: date}) 

          return res.status(200).json("updated") 
                          
        } catch (e) {

          console.log(`api, ${e}`);
          
          res.status(500).json("faild");
    }
  
  }
      
}