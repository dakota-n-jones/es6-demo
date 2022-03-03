import objectDestructuringDemo from './ObjectDestructuringDemo';
import Demo from '../components/Demo';

const mainDemoContainer = {
  sectionKeys: [
    'Object Destructuring',
  ],
  sectionComponents: [
    <Demo demoContents={objectDestructuringDemo} />,
  ],
  homeDisplay: (
    <div>
      <p>Welcome the the Javascript ES6 Demo.</p>
      <p>Click the buttons above to view different ways you can utilize ES6 features.</p>
    </div>
  ),
  homeTitle: 'Available Demos'
}

export default mainDemoContainer;
