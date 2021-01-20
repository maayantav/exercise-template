function  findDuplicate(arr)
{
    let unArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(!unArr.includes(arr[i]))
        {
            unArr.push(arr[i]);
        }
    }
    console.log(unArr);
}

findDuplicate([6, 34, 23, 54, 34, 65]);