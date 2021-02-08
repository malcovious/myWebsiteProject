function fromDec(base, num) 
{
    var result = ''; 
    var count = num; 
    var left;
    while (count > 0)
    {
        left = num % base; //remander for conversion  
        count = ~~(num/base); 
        num = count;
        result +=  convNum(left); //converts for hex values. Does nothing for 0-9
    }
    return result.split("").reverse().join("");
}

function toDec(base, num)
{
    var result = 0;
    var toAdd ;
    var temp = num.toString();
    var number = temp.split('').reverse();
    for (let i = 0; i < number.length ; i ++)
    {
        toAdd = parseInt(number[i], 16);
        result += toAdd * Math.pow(base, i);

    }
    return result;
}

function baseToBase(num, base, from)
{
    var result; 
    var temp =  toDec(from, num);
    result = fromDec(base, temp);  
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

function getResult(toSearch)
{
    var radios = document.getElementById(toSearch);
    for(var i =0, length = radios.length; i < length; i++)
    {
        if( radios[i].checked)
        {
            var base = choice(i);
            break;
        }
        return base
    }
}

function choice(picked)
{
    switch(picked)
    {
        case binary: return 2;
        case octal: return 8;
        case hex: return 16;
        default: return 10;
    }
}

function clicked()
{
 
    var fstBase = getResult("start"); 
    var lstBase = getResult("end");
    var num = document.getElementById(toConvert).value;
    var converted = baseToBase(num, lstBase, fstBase);
    document.getElementById(finished).value = converted;
}