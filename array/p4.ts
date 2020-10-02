/**
 *  Remove duplicate element from an array
 */
let vector4 = [
    34,
    9,
    36,
    12,
    10,
    0,
    10,
    36
];


let j = 0;
let i = 0;
for(i =0; i< vector4.length; i++) {
    for( j = i +1; j< vector4.length; j++) {
        if(vector4[i] == vector4[j]) {
            for(k=j; k<vector4.length; k++) {
                vector4[k] = vector4[k+1];
            }
        }
    }   
}

console.log('After Removing Note: unable to remove index', vector4);
console.log('Second method for removing duplicate element');
let tempArray =[] ;
let vector5 = [ 34, 9, 36, 12, 10, 0, 10, 36];
for(let i =0; i< vector5.length; i++) {
    if(tempArray.indexOf(vector5[i]) ==-1) {
        tempArray.push(vector5[i]);
    }
}
console.log(tempArray);