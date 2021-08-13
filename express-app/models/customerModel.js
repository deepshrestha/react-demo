const mongoose = require("mongoose")
mongoose.connect(
    "mongodb://localhost:27017/customer",
    {
        useNewUrlParser: true,  
        useUnifiedTopology: true,  
        useFindAndModify: false
    }
)

const customerSchema = new mongoose.Schema(
    {
        _id: {
            type: String
        },
        City: {
            type: String
        },
        CustomerID: {
            type: Number
        },
        Zone: {
            type: String
        },
        CustomerName: {
            type: String
        }
    }    
);

const counterSchema = new mongoose.Schema({
    _id: {
        type: String
    },
	sequence_value: {
		type: Number
    }
});

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    }    
);

const counter = mongoose.model('counter', counterSchema);
const customer =  mongoose.model('customer', customerSchema);
const userAccount = mongoose.model('userAccount', userSchema);

module.exports= {
    counter,
    customer,
    userAccount
}