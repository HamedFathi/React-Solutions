// @ts-ignore
const Switch = ({ on, children }) => {
  if (!children) {
    throw new Error('<Switch/> requires at least one <Case/> child component');
  }

  const arrChildren = Array.isArray(children) ? children : [children];
  const badChild = arrChildren.find(child => !['Case', 'Default'].includes(child.type.name));

  if (badChild) {
    throw new Error(
      `<Switch /> must only contain <Case/> children. Please wrap <${badChild.type}/> in a <Case/>`
    );
  }

  const firstMatch = arrChildren.find((child) => {
    const { value } = child.props;
    if (Array.isArray(value)) return value.includes(on);
    return value === on;
  });
  if (firstMatch) return firstMatch;

  const defaultComp = arrChildren.find(child => child.type.name === 'Default');
  return defaultComp || null;
};

export default Switch;
