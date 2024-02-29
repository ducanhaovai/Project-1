import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

CounterFeatrure.propTypes = {

};

function CounterFeatrure(props) {
    const counter = useSelector(state => state.counter)
    
    return (
        <div>
            Counter:{counter}

        </div>
    );
}

export default CounterFeatrure;