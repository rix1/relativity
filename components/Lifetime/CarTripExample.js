// @flow
import React, { useReducer } from 'react';

import InlineInput from '../InlineInput';
import Text, { Highlight } from '../Text';

const initialState = {
  currentAge: 32,
  youngAge: 8,
  carTripDuration: 3,
};

const hoursInAYear = 60 * 24 * 365;

function getConversionFactor(from, to) {
  return ((from * hoursInAYear) / (to * hoursInAYear) / 100) * 100;
}

function ageReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_FIELD': {
      const newState = { ...state, ...action.field };
      return {
        ...newState,
        conversionFactor: getConversionFactor(
          newState.currentAge,
          newState.youngAge,
          newState.carTripDuration,
        ),
      };
    }

    default:
      console.error('Action type not supported', action.type);
      return state;
  }
}

function init(state) {
  return {
    ...state,
    conversionFactor: getConversionFactor(
      state.currentAge,
      state.youngAge,
      state.carTripDuration,
    ),
  };
}

const CarTripExample = () => {
  const [state, dispatch] = useReducer(ageReducer, initialState, init);
  console.log(state);
  function handleChange(event) {
    const { id, value } = event.currentTarget;
    // console.log(event.currentTarget.id, event.currentTarget.value);
    if (!Number.isNaN(Number(value))) {
      dispatch({ type: 'CHANGE_FIELD', field: { [id]: Number(value) } });
    }
  }

  const adjustedTime = Math.round(
    state.carTripDuration * state.conversionFactor,
  );

  return (
    <Text>
      Say you&apos;re{' '}
      <InlineInput
        inputMode="numeric"
        maxLength="3"
        pattern="[0-9]*"
        value={state.currentAge}
        id="currentAge"
        onChange={handleChange}
      />{' '}
      years old. That car trip when you were{' '}
      <InlineInput
        inputMode="numeric"
        maxLength="3"
        pattern="[0-9]*"
        value={state.youngAge}
        id="youngAge"
        onChange={handleChange}
      />{' '}
      years young took{' '}
      <InlineInput
        inputMode="numeric"
        maxLength="3"
        pattern="[0-9]*"
        value={state.carTripDuration}
        id="carTripDuration"
        onChange={handleChange}
      />{' '}
      hours. Given that your experience of time is a function of your lifetime,
      this would be equivalent to a{' '}
      <Highlight>
        <output htmlFor="currentAge youngAge carTripDuration">
          {adjustedTime}
        </output>
      </Highlight>{' '}
      hour trip by your {state.currentAge} years old standards.
    </Text>
  );
};

export default CarTripExample;
