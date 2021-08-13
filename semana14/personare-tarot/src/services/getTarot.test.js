import { getTarot } from "./getTarot";

test('Request service should receive status 200', () =>{
    const request = getTarot()
    expect(request.status).toBe(200)
})