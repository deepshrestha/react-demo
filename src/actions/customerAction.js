import { COUNT_CUSTOMER, DELETE_CUSTOMER, LIST_CUSTOMER, LIST_CUSTOMER_BY_ID } from './../constant'

export const onFetchCustomerData = (result) => {
    //console.log("action", result)
    return {
        type: LIST_CUSTOMER,
        payload: result
    }
}

export const onFetchCustomerDataByID = (result) => {
    //console.log("action", result)
    return {
        type: LIST_CUSTOMER_BY_ID,
        payload: result
    }
}

export const onFetchTotalCustomerData = (result) => (
    {
        type: COUNT_CUSTOMER,
        payload: result
    }
)

export const onDeleteCustomerData = (result) => (
    {
        type: DELETE_CUSTOMER,
        payload: result
    }
)