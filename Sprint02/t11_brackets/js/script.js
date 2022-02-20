function checkBrackets(str) {
    let left = 0;
    let right = 0;
    let check = 0;

    if (str == undefined) {
        return String(-1);
    }
    
    for (let el of str) {
        if (el == "(")
            left++;
        else if (el == ")") {
            right++;
            if (right > left) {
                check++;
                right = 0;
                left = 0;
            }
        }
    }
    if (left == 0 && right == 0 && check == 0) {
        check = -1;
    }
    else if (left > right) {
        check += left - right;
    }
    
    return check;
}

