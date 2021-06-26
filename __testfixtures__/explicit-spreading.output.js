import React from 'react';

const FilterItemEducation = ({ k }) => {
    const shorthandKey = 3;
    const identifierValue = 4;
    return (
        <Component
            className="blah"
            identifierKey={0}
            literalKey={1}
            shorthandKey={shorthandKey}
            identifierValue={identifierValue}
            literalValue='literalValue'
            literalValueTrue
            expressionValue={k + 1}
            functionValue={() => {}}
            nestedObjectValue={{
                nestedKey: 'nestedValue',
            }}
            {...{
                [`expression` + k]: 2
            }} />
    );
};

export default FilterItemEducation;
