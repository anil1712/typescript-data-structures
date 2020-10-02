/**
 * Find the second largest and smallest element in array
 */
let vector1 = [
    34,
    9,
    36,
    12,
    10,
    0,
    10,
    36
];
console.log(vector1);
let n = vector1.length;
if (n == 0 || n == 1) {
    console.log('length should greater then one');
}   
let i=0; let j =0; let k = 0; 
let temp =[];
for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
        if (vector1[i] == vector1[j]) {
            console.log('i=> '+i);
            console.log('j=> '+j);
            n = n-1;
            console.log('K=>' + k + 'n=>' + n);
            for (k = j; k < n; k++) {
                console.log('K=> '+k);
                temp[k] = temp[k+1];
            } 
            j= j-1;
        }
    }
}


console.log(temp);
// console.log(vector1, j);