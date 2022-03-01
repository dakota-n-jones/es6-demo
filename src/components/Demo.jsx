import { useState } from 'react';
import '../styles.css';

function Demo({ demo: { sectionKeys, sectionComponents, homeDisplay }}) {
  const homeKey = 'Home';
  const [currentDemo, setCurrentDemo] = useState(homeKey);

  return (
    <div>
      <div className="buttonRow">
        <button onClick={() => setCurrentDemo(homeKey)}>{homeKey}</button>
        {sectionKeys.forEach((sectionKey) => (
          <button onClick={() => setCurrentDemo(sectionKey)}>{sectionKey}</button>
        ))}
      </div>

      {currentDemo === homeKey && homeDisplay}

      {sectionComponents.forEach((section, index) => currentDemo === sectionKeys[index] && section)}
    </div>
  );
}

export default Demo;
