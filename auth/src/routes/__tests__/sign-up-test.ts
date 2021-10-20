import request  from "supertest";
import { app } from "../../app";


it('returs a 201 on siccessful signup', async () => {
    return request(app)
        .post('/api/user/signup')
        .send({
            email: 'test@gmail.com',
            password: 'password'
        })
        .expect(201);
})