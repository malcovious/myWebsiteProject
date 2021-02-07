function fromDec(base, num) 
{
    var result = ''; 
    var count = num; 
    var left;
    while (count > 0)
    {
        left = num % base;
        count = ~~(num/base);
        num = count;
        result +=  convNum(left);
    }
    return result;
}

function convNum(num)
{
    switch(num)
    {
        case 10: return 'A';
        case 11: return 'B';
        case 12: return 'C';
        case 13: return 'D';
        case 14: return 'E';
        case 15: return 'F';
        default : return num.toString(); 
    }
}

console.log(fromDec(2, 25));
console.log(fromDec(8, 25));
console.log(fromDec(16, 15));