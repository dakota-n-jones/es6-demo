import {
  ShowBasicDestructuring,
  ShowDeepDestructuringAtDeclaration,
  ShowDestructuringInParams,
  ShowDestructuringNestedObjectsIsShallow,
  ShowFailSafeDestructuring
} from '../library/ObjectDestructuring';

const objectDestructuringDemo = {
  sectionKeys: [
    'Basic Destructuring',
    'Destructuring Nested Objects Is Shallow',
    'Deep Destructuring',
    'Destructuring With A Failsafe',
    'Destructuring In Function Parameters',
  ],
  sectionComponents: [
    <ShowBasicDestructuring />,
    <ShowDestructuringNestedObjectsIsShallow />,
    <ShowDeepDestructuringAtDeclaration />,
    <ShowFailSafeDestructuring />,
    <ShowDestructuringInParams />,
  ],
  homeDisplay: (
    <div>
      <p>Welcome to the Object Destructuring Demo.</p>
      <p>Click the buttons above to view different ways you can utilize object destructuring in javascript.</p>
    </div>
  ),
  homeTitle: 'Object Destructuring Demo',
}

export default objectDestructuringDemo;
