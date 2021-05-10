// @flow
import * as React from 'react';
import Range from '../Range/Range';

const START_AGE = 27; // chosen to align the slider nicely
const LifeSlider = () => {
  const [age, setAge] = React.useState(START_AGE);
  const handleChange = React.useCallback((val) => setAge(val), []);
  const relativeAgeString =
    age > START_AGE
      ? `${START_AGE} + ${age - START_AGE}`
      : `${START_AGE} - ${START_AGE - age}`;
  return (
    <div className="measure-wide f3 center mv5">
      <pre className="silver f5">
        Age: {age === START_AGE ? age : relativeAgeString}
      </pre>
      <Range
        sliderIcons={[
          '👶',
          '🧑',
          '🧑',
          '🧓',
          '🧓',
          '🧓',
          '🧓',
          '🧓',
          '👴',
          '👴',
          '⚰️',
        ]}
        hasChanged
        onChange={handleChange}
        value={age}
        max={100}
        min={0}
      />
      <div className="flex silver f6">
        <pre className="w-25">Birth</pre>
        <pre className="mr-auto">Present</pre>
        <pre className="w-10">Death</pre>
      </div>
    </div>
  );
};

export default LifeSlider;
