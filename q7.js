function sortArray(arr)
{
    let x;
    for(let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < i; j++)
        {
            if(arr[i] < arr[j])
            {
                x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
    console.log(arr);
}
arr1 = [23, 65, 2, -7, 54]
sortArray(arr1);