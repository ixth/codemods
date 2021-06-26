import React from 'react';

const FilterItemEducation = ({ k }) => {
    const shorthandKey = 3;
    const identifierValue = 4;
    return (
        <Component
            className="blah"
            {...{
                identifierKey: 0,
                'literalKey': 1,
                [`expression` + k]: 2,
                shorthandKey,
                identifierValue: identifierValue,
                literalValue: 'literalValue',
                literalValueTrue: true,
                expressionValue: k + 1,
                functionValue: () => {},
                nestedObjectValue: {
                    nestedKey: 'nestedValue',
                },
                // comment
            }}
        />
    );
};

export default FilterItemEducation;
