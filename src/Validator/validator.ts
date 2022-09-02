import { check } from "express-validator";
import { Validator } from "../resp-handler/Validator/validator";





class eventvalidator extends Validator{
    
    constructor(){
        super({
            
            create:[
                check('startDate').trim().notEmpty().withMessage("startDAte is required"),
                check('endDate').trim().notEmpty().withMessage("endDate is required"),
                check('startTime').trim().notEmpty().withMessage("startTime is required"),
                check('endTime').trim().notEmpty().withMessage("endTime is required"),
                
            ],
            update:[
                check('startDate').trim().notEmpty().withMessage("startDAte is required"),
                check('endDate').trim().notEmpty().withMessage("endDate is required"),
                check('startTime').trim().notEmpty().withMessage("startTime is required"),
                check('endTime').trim().notEmpty().withMessage("endTime is required"),  
            ]
            
        })
    }
}
export default eventvalidator