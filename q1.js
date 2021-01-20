function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    if (Array.isArray(input))
    {
        out = true;
    }
    else
    {
        out = false;
    }

/**/
    output.innerText = out;
}
