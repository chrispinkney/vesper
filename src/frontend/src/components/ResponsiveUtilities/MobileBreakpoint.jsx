import React from 'react';

import Breakpoint from './Breakpoint';

export default function PhoneBreakpoint(props) {
  return <Breakpoint name="phone">{props.children}</Breakpoint>;
}
