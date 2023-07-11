/* eslint-disable @typescript-eslint/no-empty-function */
import { useLayoutEffect as reactUseLayoutEffect } from 'react';

/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */

// eslint-disable-next-line no-extra-boolean-cast
const useLayoutEffect = Boolean(globalThis?.document)
  ? reactUseLayoutEffect
  : () => {};

export { useLayoutEffect };
