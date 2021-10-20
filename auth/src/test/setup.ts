import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';

declare global {
    var mongo: MongoMemoryServer
}

beforeAll(async () => {
    process.env.JWT_KEY = "njwncow";

    globalThis.mongo = await MongoMemoryServer.create();
    const mongoUri = globalThis.mongo.getUri();

    await mongoose.connect(mongoUri);
})


beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    collections.forEach(collection => {
        collection.deleteMany({});
    });
});


afterAll(async () => {
    await globalThis.mongo.stop();
    await mongoose.connection.close(); 
})