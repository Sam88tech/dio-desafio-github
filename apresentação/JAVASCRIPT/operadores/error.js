function validaArray(arr, num) {
  try {  
    if (!arr && !num) throw new ReferenceError(" Envie os parâmetros ");

    if (typeof arr !== 'object')
      throw new TypeError('Array ter que ser do tipo object');

    if (typeof arr !== 'number')
      throw new TypeError('Num[] ter que ser do tipo number');  

    if (arr.lenght !== num) throw new RangeError('Tamanho inválido!');  

    return arr;
  }
catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Este erro é um ReferenceError!");
        console.log(e.message);

    } else if (e instanceof TypeError) {
        console.log("Este erro é um TypeError!");
        console.log(e.message);

    } else if (e instanceof RangeError) {
        console.log("Este erro é um RangeError!");
        console.log(e.message);
    } else {
        console.log("Tipo de erro não esperado:" + e);
    }
  }
}

console.log(validaArray([], (a));