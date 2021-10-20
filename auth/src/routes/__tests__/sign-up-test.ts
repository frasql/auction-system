import request  from "supertest";
import { app } from "../../app";


it('returs a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'blabla@gmail.com',
            password: 'password'
        })
        .expect(201);
})

it('returs a 404 invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'blablablablabla',
            password: 'password'
        })
        .expect(400);
})