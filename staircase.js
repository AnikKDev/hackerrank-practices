
const stairCase = n => {
    for (let i = 0; i < n; i++) {
        console.log(' '.repeat(n - i - 1) + '#'.repeat(i + 1))
    }
}
// ==================
stairCase(6)