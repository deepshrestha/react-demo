import { connect } from 'react-redux'
import CustomerList from './../components/customer/List'
import { onFetchCustomerData } from './../actions/customerAction'
import { customerAPI } from './../api/customerAPI'

const mapStateToProps = state => {
    return {
        data: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetDataHandler: () => {
            customerAPI("http://www.json-generator.com/api/json/get/bRdBaLRuDC?indent=2")
            .then(result => {
                dispatch(
                    onFetchCustomerData(result)
                )
            })
            .catch(err => {
                alert(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)