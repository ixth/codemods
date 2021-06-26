const getName = (j, { key }) => {
    if (j.Literal.check(key) && typeof key.value === 'string') {
        return j.jsxIdentifier(key.value);
    }
    if (j.Identifier.check(key)) {
        return j.jsxIdentifier(key.name);
    }
    return null;
};

const getValue = (j, { value }) => {
    if (j.Literal.check(value)) {
        if (typeof value.value === 'string') {
            return value;
        }
        if (value.value === true) {
            return null;
        }
    }
    return j.jsxExpressionContainer(value);
};

const transformProperty = (j, node) => {
    const name = getName(j, node);
    if (name === null) {
        return null;
    }
    return j.jsxAttribute(name, getValue(j, node));
};

module.exports = ({ source }, { jscodeshift: j }) =>
    j(source)
        .find(j.JSXSpreadAttribute, (node) => j.ObjectExpression.check(node.argument))
        .forEach((explicitSpreadPath) => {
            const propertiesPath = explicitSpreadPath.get('argument', 'properties');

            propertiesPath.each((propertyPath) => {
                const transformed = transformProperty(j, propertyPath.node);
                if (transformed !== null) {
                    explicitSpreadPath.insertBefore(transformed);
                    propertyPath.prune();
                }
            });

            if (propertiesPath.getValueProperty('length') === 0) {
                explicitSpreadPath.prune();
            }
        })
        .toSource();
