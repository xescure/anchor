import type { AssertNever } from '../never.js';
import type * as Real from './node.js';
import type * as Stub from './node.public-stub.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _ignore_static_assert = AssertNever<typeof Stub extends typeof Real ? never : false>;
