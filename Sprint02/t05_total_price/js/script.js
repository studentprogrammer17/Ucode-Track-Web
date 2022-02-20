function total(addCount, addPrice, currentTotal) {
    if(currentTotal == null) {
        return (addCount * addPrice).toFixed(2);
    }
    else {
        return ((addCount * addPrice) + Number.parseFloat(currentTotal)).toFixed(2)
    }
}

