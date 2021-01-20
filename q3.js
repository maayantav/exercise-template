function firstInArr (arr, n)
{
  let newArr = [];
  if (n <= 0)
  {
    console.log(newArr);
    return newArr;
  }
  newArr = arr.slice(0, n);
  console.log(newArr);
  return newArr;
}

firstInArr([6, 34, 23, 54], 3);