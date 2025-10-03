import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

import type * as _binding from '#nobjc_native';

const binding = require('#nobjc_native');
console.log("Loading Foundation framework...");

binding.LoadLibrary('/System/Library/Frameworks/Foundation.framework/Foundation');

const NSString = binding.GetClassObject('NSString');
console.log("NSString class object:", NSString.toString());
const helloStr = NSString.$msgSend('stringWithUTF8String:', 'Hello, Objective-C!') as _binding.ObjcObject;
console.log("Created NSString object:", helloStr.toString());
const length = helloStr.$msgSend('length');
console.log("Length of string:", length);
const utf8Str = helloStr.$msgSend('UTF8String');
console.log("UTF8String:", utf8Str);