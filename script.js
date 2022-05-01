function getAreaOfCircle (radius) {
    let sum = 0;
    return Math.PI * radius * radius;
}
console.log(getAreaOfCircle(4))


function getCircumferenceOfCircle (radius) {
    let sum = 0;
    return 2 * Math.PI * radius;
}
console.log(getCircumferenceOfCircle(4))


function getAreaOfSquare (side) {
    let sum = 0;
    return side * side;
}
console.log(getAreaOfSquare(4))


function getAreaOfTriangle (base, height) {
    let sum = 0;
    return 0.5 * base * height;
}
console.log(getAreaOfTriangle(4, 10))