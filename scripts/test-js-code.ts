import { NobjcLibrary, NobjcObject } from '../dist/index.js'
import { isProxy } from 'node:util/types';

const Foundation =
    new NobjcLibrary('/System/Library/Frameworks/Foundation.framework/Foundation');


declare class _NSString extends NobjcObject {
    static stringWithUTF8String$(str: string): _NSString;
    UTF8String(): string;
    length(): number;
    toString(): string;
}


const NSString = Foundation.NSString as unknown as typeof _NSString;
const str = NSString.stringWithUTF8String$('Hello, Objective-C!');
const length = str.length();
const utf8Str = str.UTF8String();

console.log("Length:", length);
console.log("UTF8String:", utf8Str);
console.log("Str:", str);
console.log("Str is proxy:", isProxy(str));
console.log("Str UTF8String is proxy:", isProxy(str.UTF8String));