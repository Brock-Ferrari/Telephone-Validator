function textProcessor()
{
    document.getElementById('res').innerHTML = telephoneCheck(document.getElementById('txt').value);
}

function telephoneCheck(str)
{

    let numEx = [
                    ['5','5','5','-','5','5','5','-','5','5','5','5'],
                    ['(','5','5','5',')','5','5','5','-','5','5','5','5'],
                    ['(','5','5','5',')','5','5','5','5','5','5','5'],
                    ['5','5','5','5','5','5','5','5','5','5'],
                    ['1','5','5','5','-','5','5','5','-','5','5','5','5'],
                    ['1','5','5','5','5','5','5','5','5','5','5'],
                    ['1','(','5','5','5',')','5','5','5','5','5','5','5'],
                    ['1','(','5','5','5',')','5','5','5','-','5','5','5','5']
                ];
    
    let strChar = str.replace(/\s/g, '').split('');

    let i = 0;

    switch (digitCounter(str))
    {
        case 10:
            break;
        case 11:
            if (strChar[0] == 1)
            {
                i = 1;
                break;
            }
            else 
                return false;
        default:
            return false;
    }

    for (i; i < str.length; i++)
    {
        switch (strChar[i])
        {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                strChar[i] = '5';
            default:
                continue;
        }
    }

    let goodNum = true;

    for (let j = 0; j < numEx.length; j++)
    {
        goodNum = true;

        for (let k = 0; k < numEx[j].length; k++)
        {
            if (strChar[k] == numEx[j][k])
                continue;
            else
                goodNum = false;
        }

        if (goodNum == true)
            return true;
        else
            continue;
    }

    return false;

    function digitCounter(str)
    {
        return str.replace(/\D/g,'').length;
    }
    
}








/*
function telephoneCheck(str)
{
    let goodNum = true;
    let strChar = str.split('');

    for (let i = 0; i < strChar.length; i++)
    {
        switch (strChar[i])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
            case '':
            case '(':
            case ')':
            case '-':
                if (strChar.length <= 14)
                    continue;
                else
                    return false;
            default:
                return false;
        }
    }

    switch (strChar[0])
    {
        case '(':
            if (strChar[1] | strChar[2] | strChar[3] == '(' | ')' | '-')
                return false;
            else
                if (strChar[4] == ')');
        case 1:
            if ()
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        default:
            return false;
    }
}*/