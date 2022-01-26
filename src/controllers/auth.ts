import { NextFunction, Request, Response } from "express";

import { getRepository } from "typeorm";

import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

import { User } from "../entities/user";

import { validationResult } from "express-validator"

export default class UserController {
 
    static async register (req: Request, res: Response, next: NextFunction){

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          message: "Failed",
          errors: errors.array().map((err) => err),
        });
      }

        try {
            const userRepository = getRepository(User);

            bcrypt.hash(req.body.password, 12, async (err, hashedPassword) => {

              const user = new User();

              user.username = req.body.username;

              user.password = hashedPassword;

              await userRepository.save(user) 

              return res.status(201).json(user) })
                              
            } catch (e) {

              console.log(`api, ${e}`);
              
              res.status(500).json("faild");
        }
      
  }

  static async login (req: Request, res: Response, next: NextFunction){

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: "Failed",
        errors: errors.array().map((err) => err),
      });
    }
    
    try {
        const username = req.body.username;
        
        const password = req.body.password;
            
        const userRepository = getRepository(User);
       
        let loadedUser: User | any;
       
        loadedUser = await userRepository.findOne({
          select: ["username", "password"],
          where: { username: username},
        })

        if (!loadedUser) { return res.status(404).json({ message: "Something Went Wrong" }); }
        
        bcrypt
        
        .compare(password, loadedUser.password)
        
        .then((isEqual) => {
        
          if (!isEqual) {        
            return res.status(422).json({ message: "wrong password", password });        
          }
                
          const token = jwt.sign( 
            { username: loadedUser?.username },
            "nailedit",
            { expiresIn: "1h" }
            );
        
            Object.assign(loadedUser, { jwtToken: token });
        
            return res.status(200).json({
              success: true,
              token: `JWT ${token}`,
              username: username,
             });
        
          })        
          .catch((err) => { return res.status(500).json({ message: "Failed", error: err.message }) }        
          )
      
        }
       catch (e) {
        
        console.log(`api, ${e}`);
              
        res.status(500).json("faild");
      }
    };
      
}