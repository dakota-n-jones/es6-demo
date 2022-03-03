import { useState } from 'react';
import '../App.css';

function Demo({ demoContents: { sectionKeys, sectionComponents, homeDisplay, homeTitle }}) {
  const homeKey = 'Home';
  const [currentDemo, setCurrentDemo] = useState(homeKey);

  return (
    <div>
      <h1>{homeTitle}</h1>

      <div className="buttonRow">
        <button onClick={() => setCurrentDemo(homeKey)}>{homeKey}</button>
        {sectionKeys.map((sectionKey) => (
          <button onClick={() => setCurrentDemo(sectionKey)} key={sectionKey}>{sectionKey}</button>
        ))}
      </div>

      {currentDemo === homeKey && homeDisplay}

      {sectionComponents.map((section, index) => currentDemo === sectionKeys[index] && (
        <div className="section" key={sectionKeys[index]}>
          {section}
        </div>
      ))}
    </div>
  );
}

export default Demo;
