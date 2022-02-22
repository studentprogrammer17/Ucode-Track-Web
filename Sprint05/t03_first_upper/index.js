const firstUpper = (str) => {
    if(!str) return "";
    str = str.trim();
    str = str.charAt(0).toUpperCase() + str.slice(1,str.length).toLowerCase() + str.slice(str.length);
    return str;
}

module.exports.firstUpper = firstUpper;

