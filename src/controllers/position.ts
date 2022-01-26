import { NextFunction, Request, Response } from "express";

import { getRepository } from "typeorm";

import { Position } from "../entities/position";

import { validationResult } from "express-validator"


export default class PositionController {
 
    static async getAll (req: Request, res: Response, next: NextFunction){

        try {
            const positionRepository = getRepository(Position);

            const positions =
             await positionRepository.createQueryBuilder()
             .select("id, position")
             .getRawMany()
             
             res.status(200).send(positions)
                              
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
            const positionRepository = getRepository(Position);

              const position = new Position();

              position.position = req.body.position;

              await positionRepository.save(position) 

              return res.status(201).json(position) 
                              
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
        const positionRepository = getRepository(Position);

          const id = req.body.id;

          const position = req.body.position

          await positionRepository.update({id: id}, { position: position}) 

          return res.status(200).json("updated") 
                          
        } catch (e) {

          console.log(`api, ${e}`);
          
          res.status(500).json("faild");
    }
  
  }
      
}