import { body } from "express-validator";

export const auth = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("username").exists().withMessage("wrong result from exist valdiation, username is required"),
        body("password").exists().withMessage("wrong result from exist valdiation, password is required")
      ]

export const addMatch = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("teamOneId").exists().withMessage("wrong result from exist valdiation, teamOneId is required"),
        body("teamTwoId").exists().withMessage("wrong result from exist valdiation, teamTwoId is required"),
        body("date").exists().withMessage("wrong result from exist valdiation, date is required")
        
    ]

    export const updateMatch = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("teamOneId").exists().withMessage("wrong result from exist valdiation, teamOneId is required"),
        body("teamTwoId").exists().withMessage("wrong result from exist valdiation, teamTwoId is required"),
        body("date").exists().withMessage("wrong result from exist valdiation, date is required"),
        body("id").exists().withMessage("wrong result from exist valdiation, id is required")
        
    ]

    export const addPMP = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("playerId").exists().withMessage("wrong result from exist valdiation, playerId is required"),
        body("matchId").exists().withMessage("wrong result from exist valdiation, matchId is required"),
        body("positionId").exists().withMessage("wrong result from exist valdiation, positionId is required")
        
    ]

    export const updatePMP = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("playerId").exists().withMessage("wrong result from exist valdiation, playerId is required"),
        body("matchId").exists().withMessage("wrong result from exist valdiation, matchId is required"),
        body("positionId").exists().withMessage("wrong result from exist valdiation, positionId is required"),
        body("id").exists().withMessage("wrong result from exist valdiation, id is required")
        
    ]

    export const addPlayer = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("positionId").exists().withMessage("wrong result from exist valdiation, positionId is required"),
        body("name").exists().withMessage("wrong result from exist valdiation, name is required")
        
    ]

    export const updatePlayer = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("positionId").exists().withMessage("wrong result from exist valdiation, positionId is required"),
        body("name").exists().withMessage("wrong result from exist valdiation, name is required"),
        body("id").exists().withMessage("wrong result from exist valdiation, id is required")
        
    ]

    export const addPosition = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("position").exists().withMessage("wrong result from exist valdiation, position is required"),
    ]

    export const updatePosition = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("position").exists().withMessage("wrong result from exist valdiation, position is required"),
        body("id").exists().withMessage("wrong result from exist valdiation, id is required"),
    
    ]

    export const addTeam = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("name").exists().withMessage("wrong result from exist valdiation, name is required"),
    ]

    export const updateTeam = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("name").exists().withMessage("wrong result from exist valdiation, name is required"),
        body("id").exists().withMessage("wrong result from exist valdiation, id is required"),
    
    ]

    export const addPlayerTeam = [
        body("*").trim().not().isEmpty().withMessage("missing value in user"),
        body("playerId").exists().withMessage("wrong result from exist valdiation, playerId is required"),
        body("teamId").exists().withMessage("wrong result from exist valdiation, teamId is required"),
    ]
