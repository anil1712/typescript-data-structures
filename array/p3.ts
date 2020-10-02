/**
 *  Sort the elements of a array in ascending order
 */
let vector3 = [
    34,
    9,
    36,
    12,
    10,
    0,
    10,
    36
];
console.log('before sorting', vector3);
let temp =0 ;
for(let i =0; i< vector3.length; i++) {
    for(let j = i +1; j< vector3.length; j++) {
        if(vector3[i] > vector3[j]) {
            temp = vector3[i];
            vector3[i] = vector3[j];
            vector3[j] = temp;
        }
    }   
}

console.log('After sorting ', vector3);