function pares (array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i]=== 0){
            console.log("já é zero!");
        }else if (array[i] % 2 === 0){
            console.log(`troca ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}

let arr = [0, 8, 4, 6, 880, 234, 992];
console.log(pares(arr));