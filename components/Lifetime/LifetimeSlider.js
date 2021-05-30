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
      <span className="silver f5">
        Age: {age === START_AGE ? age : relativeAgeString}
      </span>
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
        <span className="w-25">Birth</span>
        <span className="mr-auto">Present</span>
        <span className="w-10">Death</span>
      </div>
    </div>
  );
};

export default LifeSlider;
