function esrever(str) {
    return ["?", "!", "."].includes(str[str.length - 1]) ? str.slice(0, -1).split('').reverse().join('') + str.slice(-1) : str.split('').reverse().join('');
}
