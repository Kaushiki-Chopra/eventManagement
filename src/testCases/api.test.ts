import mainRouter from "../routes"
import request from "supertest"
import uuid from "uuid"

import {expressInstance} from "../App";






let fakeId = uuid.v4()

let eventinfo = {
    id : fakeId,
    title: "Audit",
    description: "yellow",
    startDate: '1999-08-30',
    endDate: '1999-08-31',
    startTime: '09:06:30',
    endTime: '09:06:30',
 
}

describe("POST /api/v1/calender", () => {
    // afterAll(async () => {
    //     await request(expressInstance).delete('/api/v1/calender')
    // })
    it("should check post data", async () => {
        const response = await request(expressInstance).post('/api/v1/calender').send(eventinfo);
        const data = response.body.result
        expect(response.statusCode).toBe(201);
        expect(data.endTime).toBe(eventinfo["endTime"]);

      })

    })



describe('GET /api/v1/calender',()=>{
    beforeAll(async()=>{
        let no = await request(expressInstance).post('/api/v1/calender').send(eventinfo);
        
    })
    // afterAll(async () => {
    //     await request(expressInstance).delete('/api/v1/calender')
    // })
   
    it('should return 200',async()=>{
        const response = await request(expressInstance).get('/api/v1/calender');
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBe(undefined);
    })
    it("should return", async () => {
        const response = await request(expressInstance).get('/api/v1/calender');
        expect(response.body.result.count >= 1).toBe(true);
        
    });

})

describe("Update one todo", () => {
    beforeAll(async () => {
        await request(expressInstance).post("/api/v1/calender").send(eventinfo);
    })
    // afterAll(async () => {
    //     await request(expressInstance).delete(`/api/v1/calender/${eventinfo.id}`)
    // })
    it("should update item if it exists", async () => {
        const response = await request(expressInstance).put(`/api/v1/calender/${eventinfo.id}`).send({
            startTime: "08:30:21",
        });
        
        expect(response.statusCode).toBe(201);
    });
});


describe("Delete one todo", () => {
    // beforeAll(async()=>{
    //     let no = await request(expressInstance).post('/api/v1/calender').send(eventinfo);
        
    // })
    it("should delete one item", async () => {
      const response = await request(expressInstance).delete(`/api/v1/calender/${eventinfo.id}`)
      const data = response.body
       console.log(".......",data)
    expect(response.statusCode).toBe(200)
    });







  });





