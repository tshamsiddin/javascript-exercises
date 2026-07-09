const fibonacci = function(num) {
    if (num<0) return "OOPS";
    if (num < 1) return 0;
    a=1;
    b=1;
    for (i=3;i<=num;i++){
        let nextNumber=a+b;
        a=b;
        b=nextNumber;                               
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
