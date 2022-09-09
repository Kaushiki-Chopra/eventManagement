import { check } from "express-validator";
import { Validator } from "../resp-handler/Validator/validator";





class eventvalidator extends Validator{
    
    constructor(){
        super({
            
            create:[
                check('title').trim().notEmpty().withMessage("title is required"),
                check('startDate').trim().notEmpty().withMessage("startDate is required").isDate().withMessage("startDAte format is incorrect"),
                check('endDate').trim().notEmpty().withMessage("endDate is required").isDate().withMessage("endDate format is incorrect"),
                check('startTime').trim().notEmpty().withMessage("startTime is required").matches('^([0-4]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])?$').withMessage("startTime format is incorrect"),
                check('endTime').trim().notEmpty().withMessage("endTime is required").matches('^([0-4]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])?$').withMessage("endTime format is incorrect"),
                
            ],
            update:[
                check('title').trim().optional().notEmpty().withMessage("title is required"),
                check('startDate').trim().optional().notEmpty().withMessage("startDate is required").isDate().withMessage("startDAte format is incorrect"),
                check('endDate').trim().optional().notEmpty().withMessage("endDate is required").isDate().withMessage("endDate format is incorrect"),
                check('startTime').trim().optional().notEmpty().withMessage('startTime is required').matches('^([0-4]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])?$').withMessage("startTime format is incorrect"),
                check('endTime').trim().optional().notEmpty().withMessage("endTime is required").matches('^([0-4]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])?$').withMessage("endTime format is incorrect")
            ]
            
        })
    }
}
export default eventvalidator