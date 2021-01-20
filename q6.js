function evenNumber(num)
{
    let ans = "";
    for(let i = 0; i < num.length; i++)
    {
        if(num[i] % 2 === 0)
        {
            ans = ans + "-";
            ans = ans + num[i];
        }
        else
        {
            ans = ans + num[i];
        }
    }
    console.log(ans);
}

evenNumber("1235246764");