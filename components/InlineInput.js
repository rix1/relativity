// @flow
import React, { forwardRef } from 'react';
import theme from '../styles/theme';

type Props = {| className: string, error: boolean |};

const InlineInput = (
  { className = '', error = false, ...rest }: Props = {},
  ref,
) => (
  <>
    <style jsx>{`
      input {
        border: none;
        border-bottom: ${theme.sizes.lineWidth} dotted gray;
        outline: none;
        width: 2em;
        margin-right: 0.5em;
        margin-left: 0.5em;
        text-align: right;
      }
      input:focus {
        border-bottom: ${theme.sizes.lineWidth} solid var(--color-red-45);
      }
      .error {
        border-bottom-color: red;
      }
    `}</style>
    <input
      ref={ref}
      className={`ph2 ${className} ${error ? 'error' : ''}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  </>
);

export default forwardRef<Props, typeof InlineInput>(InlineInput);
