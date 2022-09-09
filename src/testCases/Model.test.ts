import {Calender} from "../models/calender"





let eventinfo = {

    title: "kaushiki",
    description: "hello",
    startDate: new Date(),
    endDate: new Date(),
    startTime: new Date(),
    endTime: new Date()

}


describe('Calender model test cases',()=>{
    test('create event successfully',async()=>{
        let events = await  Calender.create(eventinfo)
        expect(events).toBeInstanceOf(Object)
        expect(events).toHaveProperty('title')
        expect(events).toHaveProperty('description')
        expect(events).toHaveProperty('startDate')
        expect(events).toHaveProperty('endDate')
        expect(events).toHaveProperty('startTime')
        expect(events).toHaveProperty('endTime')

    })


    test('find all event',async()=>{
        let events = await Calender.findAll()
        expect(events).toBeInstanceOf(Object)
        expect(events[0]).toHaveProperty('title')
        expect(events[0]).toHaveProperty('description')
        expect(events[0]).toHaveProperty('startDate')
        expect(events[0]).toHaveProperty('endDate')
        expect(events[0]).toHaveProperty('startTime')
        expect(events[0]).toHaveProperty('endTime')

});

test('create event successfully',async()=>{
    let events = await Calender.destroy()
    expect(events).toBeInstanceOf(Object)
    expect(events).toHaveProperty('title')
    expect(events).toHaveProperty('description')
    expect(events).toHaveProperty('startDate')
    expect(events).toHaveProperty('endDate')
    expect(events).toHaveProperty('startTime')
    expect(events).toHaveProperty('endTime')

})



})