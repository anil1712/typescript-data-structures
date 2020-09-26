/**
 * Find the largest and smallest element in array
 */
let vector = [
    34,
    9,
    12,
    10,
    0,
    36
];
console.log(vector);
let large = vector[0];
let small = vector[0];
if (! vector.length) {
    console.log('minimum 1 element should exists');
} else {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > large) {
            large = vector[i];
        } else if (vector[i] < small) {
            small = vector[i];
        }
    }
    console.log(`Largest element in an array ${large}`);
    console.log(`Smallest element in an array ${small}`);
}
