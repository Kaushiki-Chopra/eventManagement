
import { RESPONSE_STATUS, STATUS_CODE } from '../resp-handler/constants';
import eventServiceInstance from '../services/calenderCRUD';
import {respHandler} from "../resp-handler"

class calenderController {
    // this function returns list of all event
    readAll(req, res){
      eventServiceInstance.getEvent()
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS,)
            })
            .catch((err) => {
                respHandler.sendError(res, err)
            })
    }

    // this function returns event by id
    read(req, res){
      eventServiceInstance.getEventById(req)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS)
            })
            .catch((err) => {
                res.send(res,err)
            })
    }

    // this function create event
    create(req, res) {
        eventServiceInstance.createEvent(req)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
            })
            .catch((err) => {
                respHandler.sendError(res, err)
            })
    }

    // // this function update event by id
    update(req, res){
        eventServiceInstance.updateEmployee(req)
            .then((result) => {
                respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
            })
            .catch((err) => {
                res.send(err)
            })
    }

    // this function delete event by id
    delete(req, res){
        eventServiceInstance.deleteEventById(req)
            .then((result) => {
                respHandler.sendSuccess(res,result, RESPONSE_STATUS.SUCCESS, )
            })
            .catch((err) => {
                res.send(err)
            })
    }
     

    // this function delete all event 
    deleteAll(req, res){
        eventServiceInstance.deleteAllEvent()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

export default calenderController

