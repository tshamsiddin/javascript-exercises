const isPosInt=(num)=>Number.isInteger(num) && num>0;

const sumAll = function(a, b) {
    if (!isPosInt(a) || !isPosInt(b)){
        return "ERROR";
    }

    let total=0;

    if (a>=b){
        for (let i=a;i>=b;i--){
            total+=i;
        }
    }

    if (a<=b){
        for (let i=a;i<=b;i++){
            total+=i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
