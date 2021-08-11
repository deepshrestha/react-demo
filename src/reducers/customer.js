import { COUNT_CUSTOMER, DELETE_CUSTOMER, LIST_CUSTOMER, LIST_CUSTOMER_BY_ID } from './../constant'

const initialState = {
    customer: [],
    customers: [], 
    count: 0
}

const deleteCustomerHandler = (counterState, payloadData) => {
    return {
        ...counterState,
        count: payloadData - 1
    }
}

const listCustomerHandler = (customerState, payloadData) => {
    let newState = {
        ...customerState,
        customers: payloadData
    }
    return newState;
}

const countCustomerData = (counterState, payloadData) => {
    return {
        ...counterState,
        customer: [],
        count: payloadData
    }
}

const listCustomerByIdHandler = (customerState, payloadData) => {
    let newState = {
        ...customerState,
        customer: payloadData
    }
    return newState;
}

const customerReducer = (state=initialState, action) => {
    switch(action.type){
        case DELETE_CUSTOMER:
            return deleteCustomerHandler(state, action.payload)
        case COUNT_CUSTOMER:
            return countCustomerData(state, action.payload)
        case LIST_CUSTOMER:
            return listCustomerHandler(state, action.payload)
        case LIST_CUSTOMER_BY_ID:
            return listCustomerByIdHandler(state, action.payload)
        default:
            return state
    }
}

export default customerReducer