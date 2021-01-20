function removeEmptyValue(arr)
{
    newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] !== 0 && arr[i] !== undefined && arr[i] !== null && arr[i] !== NaN && arr[i] !== "" && arr[i] !== false)
        {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

removeEmptyValue([NaN, 0, 15, false, -22, '',undefined, 47, null]);