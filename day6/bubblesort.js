let arr = [8, 1, 2, 5, 1]
let tmp = 0;
for (let i = 0; i < arr.length; i++) {
    for(let j =0; j < arr.length; j++) {
        if (arr[j] > arr[i]){
            tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        }
    }
}
console.log(arr)