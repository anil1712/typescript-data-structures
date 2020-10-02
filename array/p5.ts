/**
 *  WAP to merge two array
 */
let arr1 = [8, 0,10, 5];
let arr2 = [3,4,5];
let arr3 =[];
let i =0;
let j =0;
let k = 0;
while (i < arr1.length && j < arr2.length) {
    if(arr1[i]< arr2[j]) {
        arr3[k++] = arr1[i++];
    } else {
        arr3[k++] = arr2[j++];
    }
}
while (i < arr1.length) {
    arr3[k++] = arr1[i++];   
}
while (j < arr2.length) {
    arr3[k++] = arr2[j++];   
}
console.log('Merge two array', arr3);

console.log('Es6 method');
let result =[];
result.push(...arr1, ...arr2);
console.log(result);