import { time } from 'console';
import exp from 'constants';
import { Request } from 'express';
import uuid from 'uuid';
import eventServiceInstance from "../services/calenderCRUD";




let fakeId = uuid.v4()

let eventinfo = {
    id : fakeId, 
    title: "good",
    description :"nice",
    startDate: new Date("2036-10-28"),
    endDate:new Date("2037-10-28"),
    startTime:"02:23:00",
    endTime:"02:24:00"
    

}




describe("event test cases",()=>{
    it("create event test cases",async()=>{
        var req = {
            body: eventinfo
        }

        var event = await eventServiceInstance.createEvent(req)
        expect(event.startTime).toBe("02:23:00")
        expect(event.id).toBe(fakeId)
        expect(event.endDate).toStrictEqual("2010-11-28")
    })
   

    it("get all event testcase",async()=>{
        var event = await eventServiceInstance.getEvent()
        expect(event.rows[0]).toHaveProperty('title')
        expect(event.rows[1]).toHaveProperty('startDate')
        expect(event.rows[0]).toHaveProperty('startDate')
    })

    it("get event by ID", async() => {
        var req = {
            params : fakeId
        }
        var event = await eventServiceInstance.getEventById(req)
        expect(event.id).toBe(fakeId)
    })

    it('delete All event successfully', async() => {
        var event = await eventServiceInstance.deleteAllEvent()
        expect(event).toBe(undefined)
        expect(event).toBe("Successfully deleted")

    })

    it('delete event successfully by ID', async () => { 
        let event = await eventServiceInstance.deleteEventById({ params: { id: fakeId} })
        console.log("...............",event) 
        expect(event).toBe('event deleted successfully')
    })

    it("conflict Times", async() => {
        let event = await eventServiceInstance.Times("3:10:00","4:10:00")
        expect(event).toBe(false)
        expect(event).toBe(true)
    })


    it("conflict Date", async() => {
        let event = await eventServiceInstance.Dates("2059-10-21","2059-10-22")
        expect(event).toBe(false)
        expect(event).toBe(true)
    })



})