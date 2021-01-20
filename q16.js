function leapYear(startYear, endYear)
{
    let years = [];
    for (let i = startYear; i <= endYear; i ++)
    {
        if(i % 4 === 0 && i % 100 !== 0)
        {
            years.push(i);
        }
        if(i % 400 === 0)
        {
            years.push(i);
        }
    }
    console.log(years);
}

leapYear(1500, 2000);