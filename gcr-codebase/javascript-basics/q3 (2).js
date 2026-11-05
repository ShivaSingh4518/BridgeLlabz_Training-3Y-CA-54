let userName = "Utkarsh";
let age = 20;
let isStudent = true;
let hobbies = ["Chess", "Coding"];
let user = { name: "Utkarsh", city: "Varanasi" };
let emptyValue = null;
let undefinedValue;

console.table([
    { Label: "String", Value: userName, Type: typeof userName },
    { Label: "Number", Value: age, Type: typeof age },
    { Label: "Boolean", Value: isStudent, Type: typeof isStudent },
    { Label: "Array", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { Label: "Object", Value: user, Type: typeof user },
    { Label: "Null", Value: emptyValue, Type: emptyValue === null ? "null" : typeof emptyValue },
    { Label: "Undefined", Value: undefinedValue, Type: typeof undefinedValue }
]);