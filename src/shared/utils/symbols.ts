export const subscript = (sym: string | number): string => {
    return String(sym).split('').map((char) => {
        if (/[0-9]/.test(char)) {
            return String.fromCharCode(0x2080 + parseInt(char))
        }
        const lowerChar = char.toLowerCase()
        const supportedSubscriptLetters: Record<string, string> = {
            'a': '\u2090', 'e': '\u2091', 'h': '\u2095',
            'i': '\u1D62', 'j': '\u2C7C', 'k': '\u2096',
            'l': '\u2097', 'm': '\u2098', 'n': '\u2099',
            'o': '\u2092', 'p': '\u209A', 'r': '\u1D63',
            's': '\u209B', 't': '\u209C', 'u': '\u1D64',
            'v': '\u1D65', 'x': '\u2093'
        }
        if (lowerChar in supportedSubscriptLetters) {
            return supportedSubscriptLetters[lowerChar]
        }
        switch (char) {
            case '+': return '\u208A'
            case '-': return '\u208B'
            case '=': return '\u208C'
            case '(': return '\u208D'
            case ')': return '\u208E'
            default: return char
        }
    }).join('')
}

export const superscriptDigit = (sym: string | number): string => {
    const map = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
        '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
    
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ',
        'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
        'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ',
        'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
        'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
    
        'A': 'ᴬ', 'B': 'ᴮ', 'D': 'ᴰ', 'E': 'ᴱ', 'G': 'ᴳ',
        'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ',
        'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'R': 'ᴿ',
        'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ'
    }

    return String(sym).split('').map(d => map[d] || d).join('')
}