//import  {Calender}  from "../models/calender"
import { Calender } from "../models/calender";
import Exception from "../resp-handler/exception";
import { ERROR_TYPE, RESPONSE_STATUS } from "../resp-handler/constants";
import { Request } from "express";
import { UUID, UUIDV4 } from "sequelize";
const { Op } = require("sequelize");



class eventService {

    // create event 
    async createEvent(req) {
        try {
            let title = req.body.title
            let startDate = req.body.startDate
            let endDate = req.body.endDate
            let startTime = req.body.startTime
            let endTime = req.body.endTime
            let existDates = await this.Dates(startDate, endDate);
            let existTimes = await this.Times(startTime, endTime);

            let existTitle = await Calender.findOne({ where: { title: title } })
            if (existTitle) {
                console.log("Title already exist");
                if (existDates) {

                    console.log("this date exist or dates conflict ");
                    if (existTimes) {
                        throw new Exception(RESPONSE_STATUS.ALREADY_EXISTS, "Title , Date and Time already exist");
                    }
                    else {
                        console.log("you can create event as time does  conflict");
                        let eventTitle = await Calender.create(req.body);
                        return Promise.resolve(eventTitle)


                    }
                }

                else {
                    console.log("new date")
                    let eventTitles = await Calender.create(req.body);
                    return Promise.resolve(eventTitles)
                }
            }

            else {
                console.log("different tittle")
                if (existDates) {
                    console.log("this date exist or dates conflict ");
                    if (existTimes) {
                        throw new Exception(RESPONSE_STATUS.ALREADY_EXISTS, "Date and Time already exist");

                    }
                    else {
                        console.log("you can create event as time does not conflict");
                        let eventTitle = await Calender.create(req.body);
                        return Promise.resolve(eventTitle)
                    }
                }
                else {
                    console.log("new Dates")
                    let eventTitle = await Calender.create(req.body);
                    return Promise.resolve(eventTitle)

                }
            }

        }
        catch (err) {
            console.log('Failed to create user:', err);
            return Promise.reject(err)
        }
    }
















    // update event by Id
    async updateEmployee(req:Request) {
        try {
            let id = req.params.id
            let title = req.body.title
            let startDate = req.body.startDate
            let endDate = req.body.endDate
            let startTime = req.body.startTime
            let endTime = req.body.endTime
            // check if role exist or not
            let event = await Calender.findOne({ where: { id: id } })
            if (!event) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "This ID does not exist");
            }
            let updateEvent = await Calender.update(req.body, { where: { id: id } })
            if (updateEvent) {
                return Promise.resolve(updateEvent)
            }
            // let even = await Calender.findOne({where: {id :id}})
        } catch (err) {
            return Promise.reject(err)
        }

    }


    // get All event
    async getEvent() {
        try {
            let emp = await Calender.findAndCountAll()
            return Promise.resolve(emp)
        }
        catch (err) {
            return Promise.reject(err)
        }
    }



    // get event by Id
    async getEventById(req) {
        let id = req.params.id

        try {
            let eventExist = await Calender.findOne({ where: { id: id } })
            if (!eventExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "This ID does not exist");
            }
            return Promise.resolve(eventExist)
        }
        catch (err) {
            console.log("NOT FOUND")
            return Promise.reject(err)
        }
    }

    //  delete All Event 
    async deleteAllEvent() {
        try {
            await Calender.destroy({
                truncate: true

            });
        } catch (err) {

            throw ('record not deleted')

            return Promise.reject(err)

        }
    }

    //  delete Event by ID 
    async deleteEventById(req) {
        let id = req.params.id
        try {
            let event = await Calender.destroy({where : {id:id}});
            if (!event){
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "This ID does not exist");

            }
            return Promise.resolve(event)

        } catch (err) {
            return Promise.reject(err)

        }
    }




async Dates(startDate, endDate) {
    if(startDate<endDate){
    let existDate = await Calender.findOne({ where: { startDate: startDate, endDate: endDate }, })
    let findDate = await Calender.findOne({
        where: {
            [Op.or]: [
                {
                    [Op.and]: [
                        {
                            startDate: { 
                                [Op.gt]: startDate
                            }

                        },
                        {
                            startDate: {
                                [Op.eq]: endDate
                            }

                        }

                    ]
                },
                {
                    [Op.and]: [
                        {
                            endDate: { 
                                [Op.eq]: startDate
                            }

                        },
                        {
                            endDate: {
                                [Op.lt]: endDate
                            }

                        }

                    ]
                },
                {
                    [Op.and]: [
                        {
                            startDate: { 
                                [Op.gt]: startDate
                            }

                        },
                        {
                            startDate: {
                                [Op.lt]: endDate
                            }

                        }

                    ]
                },
                {
                    [Op.and]: [
                        {
                            startDate: {
                                [Op.eq]: startDate
                            }

                        },
                        {
                            endDate: {
                                [Op.gt]: endDate
                            }

                        }
                    ]
                },
                {
                    [Op.and]: [
                        {
                            startDate: {
                                [Op.lt]: startDate
                            }

                        },
                        {

                            endDate: {
                                [Op.eq]: endDate
                            }

                        }

                    ]
                },
                {
                    [Op.and]: [
                        {
                            endDate: {
                                [Op.gt]: startDate
                            }

                        },
                        {
                            endDate: {
                                [Op.lt]: endDate
                            }

                        }
                    ]
                },
                {
                    [Op.and]: [
                        {
                            startDate: {
                                [Op.lt]: startDate
                            }

                        },
                        {
                            endDate: {
                                [Op.gt]: endDate
                            }

                        }
                    ]
                }
            ]

        }
        
    })
    if (existDate || findDate) {
        return Promise.resolve(true);

    }
    return Promise.resolve(false);
} 
else{
    throw new Exception(RESPONSE_STATUS.NOT_ALLOWED, "StartDate cannot be greater then endDate");
    

}
}


async Times(startTime, endTime) {
    let existTime = await Calender.findOne({ where: { startTime: startTime, endTime: endTime }, })
    let findTime = await Calender.findOne({
        where: {
            [Op.or]: [
                {
                    [Op.and]: [
                        {
                            startTime: {
                                [Op.gt]: startTime
                            }

                        },
                        {
                            startTime: {
                                [Op.eq]: endTime
                            }

                        }

                    ]
                },
                {
                    [Op.and]: [
                        {
                            endTime: {
                                [Op.eq]: startTime
                            }

                        },
                        {

                            endTime: {
                                [Op.lt]: endTime
                            }

                        }

                    ]
                },
                {
                    [Op.and]: [
                        {
                            startTime: {
                                [Op.lt]: startTime
                            }

                        },
                        {

                            endTime: {
                                [Op.eq]: endTime
                            }

                        }

                    ]
                },
                {
                    [Op.and]: [
                        {
                            startTime: {
                                [Op.eq]: startTime
                            }

                        },
                        {

                            endTime: {
                                [Op.gt]: endTime
                            }

                        }

                    ]
                },
                {
                    [Op.and]: [
                        {
                            startTime: {
                                [Op.gt]: startTime
                            }

                        },
                        {
                            startTime: {
                                [Op.lt]: endTime
                            }

                        }
                    ]
                },
                {
                    [Op.and]: [
                        {
                            endTime: {
                                [Op.gt]: startTime
                            }

                        },
                        {
                            endTime: {
                                [Op.lt]: endTime
                            }

                        }
                    ]
                },
                {
                    [Op.and]: [
                        {
                            startTime: {
                                [Op.lt]: startTime
                            }

                        },
                        {
                            endTime: {
                                [Op.gt]: endTime
                            }

                        }
                    ]
                }
            ]

        }

    })
    if (existTime || findTime) {
        return Promise.resolve(true);
    }
    return Promise.resolve(false);

}
}

let eventServiceInstance = new eventService()
export default eventServiceInstance

