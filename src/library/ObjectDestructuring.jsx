import { useState } from 'react';

const cat = {
  furColor: 'tortoise',
  furLength: 'medium',
  name: 'Diana',
};

export function ShowBasicDestructuring() {
  const { furColor } = cat;
  // equivalent: const furColor = cat.furColor;
  const { furLength: length } = cat;
  // equivalent: const length = cat.furLength;

  return (
    <div>
      <p>Given the object <b>cat</b>: {cat.toString()}</p>
      <br />
      <p>By destructuring the <b>furColor</b> property I can use it on its own: {furColor}</p>
      <p>I could also rename the <b>furLength</b> property to be just <b>length</b> and use it: {length}</p>
      <p>Versus just accessing the property on the object like so <b>cat.name</b>: {cat.name}</p>
    </div>
  );
}

export function ShowDestructuringNestedObjectsIsShallow() {
  const [changeBirthday, setChangeBirthday] = useState(false);
  const detailedCat = {
    ...cat,
    birthday: {
      month: 1,
      day: 24,
      year: 2018,
    },
  };
  const { birthday } = detailedCat;

  if (changeBirthday) {
    birthday.month = 5;
  }

  return (
    <div>
      <div>
        <p>Given the object <b>detailedCat</b>: {detailedCat.toString()}</p>
        <br />
        <p>By destructuring the <b>birthday</b> property I can use it on its own: {birthday.toString()}</p>
      </div>
      <button onClick={() => setChangeBirthday(true)}>Click here to change the birth month to 5</button>
      {changeBirthday && (
        <div>
          <br />
          <p>See how if I update a nested object's property on the new destructured object</p>
          <br />
          <p>birthday.month = 5</p>
          <br />
          <p>Since I destructured an object rather than a primitive value, it's a shallow copy.</p>
          <p>This means its just a memory reference to the original object on <b>detailedCat</b>.</p>
          <p>If I check the value on <b>detailedCat</b>, it is: {detailedCat.birthday.month}</p>
          <p>If you plan on only reading values though, this method is fine, but not if you plan on changing them.</p>
          <p>(Note: or a clever reverse, use this method to destructure a section of an object and still have its values be accurate to the original, reflecting any changes)</p>
        </div>
      )}
    </div>
  );
}

export function ShowDeepDestructuringAtDeclaration() {
  const [changeBirthday, setChangeBirthday] = useState(false);
  const detailedCat = {
    ...cat,
    birthday: {
      month: 1,
      day: 24,
      year: 2018,
    },
  };
  let { birthday: { month, day, year } } = detailedCat;

  if (changeBirthday) {
    month = 5;
    day = 30;
    year = 2022;
  }

  return (
    <div>
      <div>
        <p>Given the object <b>detailedCat</b>: {detailedCat.toString()}</p>
        <br />
        <p>By destructuring the <b>birthday</b> object's properties I can use them on their own: {`${month} ${day}, ${year}`}</p>
        <p>Notice how birthday is no longer available as a variable, I'm just using it to destructure the date from it</p>
      </div>
      <button onClick={() => setChangeBirthday(true)}>Click here to change the birth month to 5</button>
      {changeBirthday && (
        <div>
          <br />
          <p>See how if I update the nested object's properties on the new destructured variables</p>
          <br />
          <p>month = 5</p>
          <p>day = 30</p>
          <p>year = 2022</p>
          <br />
          <p>Since I destructured the properties with primitive values rather than the object, it's a deep copy.</p>
          <p>If I check the values on <b>detailedCat</b>, they are still: {`${detailedCat.birthday.month} ${detailedCat.birthday.day}, ${detailedCat.birthday.year}`}</p>
          <p>If you either just need only a 1-3 properties from a nested object and it has more than that</p>
          <p>This is potentially better than just destructuring the object itself, it narrows the focus, even if you don't plan on changing values</p>
          <p>But if you plan on changing values from a nested object you're destructuring, you absolutely should use this method</p>
          <p>(Note: Either that or do nested object spreading onto a new object, covered in the spread operator section)</p>
        </div>
      )}
    </div>
  );
}

export function ShowFailSafeDestructuring() {
  const dog = {
    furColor: 'brown',
    furLength: undefined,
    name: undefined,
  };
  const { name = 'Fudge', furLength: length = 'short' } = dog;

  return (
    <div>
      <p>Given the object <b>cat</b>: {dog.toString()}</p>
      <br />
      <p>By destructuring the <b>name</b> property with a fail safe value, if it's undefined I will still get the value: {name}</p>
      <p>I can even rename the <b>furLength</b> property to <b>length</b> and still assign a fail safe value: {length}</p>
    </div>
  );
}

export function ShowDestructuringInParams({ furColor, furLength, name }) {
  return (
    <div>
      <p>Any function can destructure an object parameter into named variables</p>
      <p>But our components will always do so to represent our props (each prop makes up the props object)</p>
      <p>So now I can just use each variable on it's own easily: {`${name} has ${furLength} ${furColor} fur`}</p>
      <p>By doing this, anyone calling this function/component could even pass an object that has more properties than these 3</p>
      <p>But the function/component will only destructure and have access to the properties it cares about</p>
    </div>
  );
}
