function palindromo(string) {
    if (!string) return "não exite string";
    return string.split("").reverse().join("") === string;
}

console.log(palindromo("amo"));