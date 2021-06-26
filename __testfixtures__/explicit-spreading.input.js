import React from 'react';

const FilterItemEducation = ({ k }) => {
    const shorthandKey = 2;
    const identifierValue = 3;
    return (
        <>
            <Component
                className="blah"
                {...{
                    identifierKey: 0,
                    'literalKey': 1,
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
            <Component
                {...{
                    transformable: true,
                    'transformableToo': 2,
                    [`expression` + k]: 2,
                }}
            />
        </>
    );
};

export default FilterItemEducation;
