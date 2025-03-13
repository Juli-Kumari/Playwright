import {test} from '../fixtures/MyCustomFixture.spec'

test('Test practice 1', ({fixture1, workerFixture1})=>{
    console.log(fixture1)
    console.log(workerFixture1)
})


test('Test practice 2', ({fixture1})=>{
    console.log(fixture1)
})