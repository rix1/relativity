import React from 'react';

/**
 *
 * TODO:
 * [] Beacon/Pulse
 * [] Clock/circle
 */

const Beacon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill="currentColor" opacity=".5" />
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity=".5" />
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="transparent"
      stroke="currentColor"
      opacity=".5">
      <animate
        attributeName="r"
        from="0"
        to="12"
        dur="1.4s"
        repeatCount="indefinite"
        animationDirection="alternate"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1.4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

const Dots = () => {
  const dots = ['palegreen', 'mediumaquamarine', 'lightseagreen'];
  const padding = 12;
  const width = 12;
  const timing = 0.1;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${24 * dots.length} 24`}>
      {dots.map((color, index) => (
        <circle
          key={color}
          cx={width + width * index + (index * padding) / 2}
          cy="12"
          r={width / 2}
          fill={color}
          opacity="0">
          <animate
            id={`circle${index}`}
            attributeName="opacity"
            from="0"
            to="1"
            dur={`${timing}s`}
            fill="freeze"
            begin={
              index
                ? `circle${index - 1}.end+${timing}s`
                : `0;circle${dots.length - 1}.end+${timing * 4}s`
            }
            additive="sum"
          />
          <animate
            from="1"
            to="0"
            attributeName="opacity"
            dur={`${timing * 2}s`}
            fill="freeze"
            begin={`circle${index}.end + ${timing * 2}s`}
          />
        </circle>
      ))}
    </svg>
  );
};

const Circle = () => (
  <svg width="100" height="100" viewBox="0 0 100 100">
    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#2ed8a7" />
      <stop offset="100%" stopColor="#a6ceff" />
    </linearGradient>
    <circle
      strokeLinecap="round"
      cx="50"
      cy="50"
      r="48"
      stroke="url(#linear)"
      strokeWidth="4"
      fill="none"
      strokeDasharray="315"
      strokeDashoffset="100"
      strokeMitterlimit="0"
      transform="rotate(-90 ) translate(-100 0)">
      <animate
        attributeName="stroke-dashoffset"
        from="315"
        to="0"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

const SpeedViz = () => {
  return (
    <div className="">
      <div className="w-32 h-16 text-red-600">
        <Dots />
      </div>
      <div className="w-16 h-16 text-red-600">
        <Beacon />
      </div>
      <div className="w-16 h-16 text-blue-600">
        <Circle />
      </div>
    </div>
  );
};

export default SpeedViz;
