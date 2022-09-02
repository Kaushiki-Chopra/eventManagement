import { Router } from "express"
import calenderController from "./controllers/calenderController";
import eventvalidator from "../src/Validator/validator"
//import { create } from "domain";


const mainRouter = Router()
const event = new calenderController()
const valid = new eventvalidator()
// For Calender CRUD

mainRouter.route('/api/v1/calender').post(valid.makeValidation('create'),event.create)
mainRouter.route('/api/v1/calender/:id').put(valid.makeValidation('update'),event.update)
mainRouter.route('/api/v1/calender/:id').get(event.read)
mainRouter.route('/api/v1/calender').get(event.readAll)
// // mainRouter.route("/getCalendar").get((req,res)=>res.send("get API"))
mainRouter.route('/api/v1/calender').delete(event.deleteAll)
mainRouter.route('/api/v1/calender/:id').delete(event.delete)

export default mainRouter

