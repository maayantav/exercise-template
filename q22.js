function unionTwoArrays(arr1, arr2)
{
    let unArr = [];
    for(let i = 0; i < arr1.length; i++)
    {
        if(!unArr.includes(arr1[i]))
        {
            unArr.push(arr1[i]);
        }
    }

    for(let j = 0; j < arr2.length; j++)
    {
        if(!unArr.includes(arr2[j]))
        {
            unArr.push(arr2[j]);
        } 
    }
    let x;
    for(let i = 0; i < unArr.length; i++)
    {
        for (let j = 0; j < i; j++)
        {
            if(unArr[i] < unArr[j])
            {
                x = unArr[i];
                unArr[i] = unArr[j];
                unArr[j] = x;
            }
        }
    }
    console.log(unArr);
}

const a = [6, 34, 23, 54];
const b = [34, 3, 58, 12];
unionTwoArrays(a, b);