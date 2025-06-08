import {test, expect} from '@playwright/test';
import { request } from 'http';
var userId;

test("Get users", async ({ request }) => {
    
    //Get response
    const response = await request.get('https://reqres.in/api/users?page=2')

    //print response in json fromat
    console.log(await response.json())

    //validate response
    expect(response.status()).toBe(200);

})

test("Post user", async ({ request }) => {

    //send request payload
    const response = await request.post('https://reqres.in/api/users',
        {
            data:{"name":"tom", "job":"developer" },
            headers:{ "Accept":"application/json"}
        } )

        //print response in json fromat
        console.log(await response.json())

        //validate response
        expect(response.status()).toBe(401);

        //store response in variable
        var res= await response.json()

        //capture id from response
        userId = res.id


})

test("Update user", async ({ request }) => {
    
    //send request payload and add id=411 to payload
    const response = await request.put('https://reqres.in/api/users/'+userId,
        {
            data:{"name":"tom", "job":"tester" },
            headers:{ "Accept":"application/json"}
        } )

        //print response in json fromat
        console.log(await response.json())

        //validate response
        expect(response.status()).toBe(200);

})

test("Delete user", async ({ request }) => {

    await request.delete('https://reqres.in/api/users/'+userId)
    expect (response.status()).toBe(204);

})