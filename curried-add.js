function curriedAdd(total = 0) {
    return function next(num) {
        if (num === undefined) return total;
        return curriedAdd(total + num);
    };
}

const curriedAddWrapper = (...args) => 
    args.length === 0 ? 0 : curriedAdd(...args);

module.exports = { curriedAdd: curriedAddWrapper };
