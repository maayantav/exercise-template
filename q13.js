function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    arr = [6, 34, 23, 54, 34, 65];
    arr.push(input);
    for(let i = 0; i < arr.length; i++)
    {
        out += ("\nElement " + i + " = " + arr[i]);
    }
/**/
    output.innerText = out;
}