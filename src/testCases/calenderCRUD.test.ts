const uuid = require('uuid')
import { moveMessagePortToContext } from "worker_threads";
// const calenderCrud = require('../services/calenderCRUD');
import eventServiceInstance from "../services/calenderCRUD"

const request = require ("supertest");
import moment from "moment"




let fakeId = uuid.v4()

let eventinfo = {
    
    id: fakeId,
    title: "good",
    description :"nice",
    startDate: new Date('2060-06-30'),
    endDate: "2055-09-29",
    startTime: "18:23:00",
    endTime: "18:24:00"
    

}


describe("event test cases",()=>{
    it("create event test cases",async()=>{
        var req = {
            body: eventinfo
        }

        var event = await eventServiceInstance.createEvent(req)
        expect(event.startDate).toStrictEqual(new Date("2060-06-30"))
        
        expect(event.id).toBe(fakeId)
    })
   

    it("get all event testcase",async()=>{
        var event = await eventServiceInstance.getEvent()
        expect(event.rows[0]).toHaveProperty('title')
    })

    it('delete user successfully', async() => {
        var event = await eventServiceInstance.deleteAllEvent()
        expect(event).toBe(undefined)
    })
    

    
})
function Z(arg0: number, T00: any, arg2: number, arg3: number, arg4: number, Z: any) {
    throw new Error("Function not implemented.");
}

function T00(arg0: number, T00: any, arg2: number, arg3: number, arg4: number, Z: (arg0: number, T00: any, arg2: number, arg3: number, arg4: number, Z: any) => void) {
    throw new Error("Function not implemented.");
}

