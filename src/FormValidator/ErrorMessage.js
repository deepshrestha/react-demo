import React from 'react';

const ErrorMessage = ({errorMsg}) => {
    return (
        <div className="inputError">
            {
                errorMsg
            }
        </div>
    )
}

export default ErrorMessage;