import React from 'react';

import Breakpoint from './Breakpoint';

export default function DesktopBreakpoint(props) {
  return <Breakpoint name="desktop">{props.children}</Breakpoint>;
}
