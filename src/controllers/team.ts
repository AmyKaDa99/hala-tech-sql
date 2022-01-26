import { NextFunction, Request, Response } from "express";

import { getRepository } from "typeorm";

import { Team } from "../entities/team";

import { validationResult } from "express-validator"

export default class TeamController {
 
    static async getAll (req: Request, res: Response, next: NextFunction){

        try {

            const teamRepository = getRepository(Team);

            const teams =
             await teamRepository.createQueryBuilder()
             .select("id, name")
             .getRawMany()
           
             res.status(200).json(teams)
                              
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
           
              const teamRepository = getRepository(Team);

              const team = new Team();

              team.name = req.body.name;

              await teamRepository.save(team) 

              return res.status(201).json(team) 
                              
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

         const teamRepository = getRepository(Team);

          const id = req.body.id;
        
          const name = req.body.name;

          await teamRepository.update({id: id}, {name: name}) 

          return res.status(200).json("updated") 
                          
        } catch (e) {

          console.log(`api, ${e}`);
          
          res.status(500).json("faild");
    }
  
  }
      
}