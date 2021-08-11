const mongoose = require("mongoose")
mongoose.connect(
    "mongodb://localhost:27017/customer",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const customerSchema = mongoose.Schema(
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
)

module.exports = mongoose.model('customer', customerSchema)