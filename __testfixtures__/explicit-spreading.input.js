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
                }}
            />
            <Component
                {...{
                    transformable: true,
                    'transformableToo': 2,
                    [`expression` + k]: 2,
                }}
            />
            <Component
                {...{
                    // 1
                    one: 1,
                    /* 2 */
                    two: 2,
                    // 3
                    /* 4 */
                }}
            />
        </>
    );
};

export default FilterItemEducation;
