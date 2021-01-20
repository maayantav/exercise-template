function binaySearch(arr, x)
{
    let index, num = 0, inArr = false;
    do{
        index = arr.length/2;
        if(arr[index] > x)
        {
            arr = arr.slice(0, index);
            num += index;
        }
        else if(arr[index] < x)
        {
            arr = arr.slice(index, arr.length);
            num += index;
        }
        else if(arr[index] === x)
        {
            num += index;
            console.log(x + " is index: " + num);
            inArr = true;
        }
    }while(arr[index] !== x && index > 1)
    if(!inArr)
    {
        console.log(x + " is not found");
    }
}

binaySearch([3, 6, 23, 43, 54, 67, 85, 100], 67);