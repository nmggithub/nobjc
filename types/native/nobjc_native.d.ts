declare module '#nobjc_native' {
    export class ObjcObject {
        $msgSend(selector: string, ...args: any[]): unknown;
    }
    export function LoadLibrary(path: string): void;
    export function GetClassObject(name: string): ObjcObject;
}