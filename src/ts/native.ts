import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import * as _binding from '#nobjc_native';
const binding: typeof _binding = require('#nobjc_native');
const { LoadLibrary, GetClassObject, ObjcObject } = binding;
export { LoadLibrary, GetClassObject, ObjcObject }
export type { _binding as NobjcNative };