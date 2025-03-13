import {test as baseTest} from '@playwright/test'

type MyFixture = {
 fixture1: any
}

type MyWorkerFixture1 ={
    workerFixture1: any
}

export const test = baseTest.extend<MyFixture, MyWorkerFixture1>({
    fixture1: async({}, use)=>{
        const fixture1='I am fixture 1'
        console.log("Before part of Fixture 1")
        await use(fixture1)
        console.log("After part of Fixture 1")
    },

    // worker fixture ->  contains 2 items 
    workerFixture1:[async({}, use)=>{
        const workerFixture1='I am worker fixture 1'
        console.log("Before part of worker Fixture 1")
        await use(workerFixture1)
        console.log("After part of worker Fixture 1")
    }, {scope: 'worker'}]
})