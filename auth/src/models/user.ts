import mongoose from 'mongoose';
import { Password } from '../services/password';

// describes properties required to create a new User 
interface UserAttrs {
    email: string;
    password: string;
}

// describes the properties that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;

}

// describes the properties that a User Document has
interface UserDoc extends mongoose.Document {
    email: string,
    password: string
}

// user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        // transform document -> _id = id
        transform(doc, rec) {
            rec.id = rec._id;
            delete rec._id;
            delete rec.password;
            delete rec.__v;
        }

    }
});



userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };