export const subscriptDigit = (idx: number) => idx.toString().split('').map(
    d => String.fromCharCode(0x2080 + parseInt(d))
).join('')