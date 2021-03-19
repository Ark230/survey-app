import React from 'react';
import './with-spinner.styles.scss';

const withSpinner = WrappedComponent => (({isFetching, ...otherProps}) => {
    const Spinner =  isFetching ? (
        <div className="spinner-overlay">
            <div className="spinner-container">
            </div>
        </div>


    ) : (<WrappedComponent {...otherProps}/>)
    
    return Spinner; 

});

export default withSpinner;