module.exports = function assign(e) {
    for (let t = 1; t < arguments.length; t++) {
        let n = arguments[t]
        for (let r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}