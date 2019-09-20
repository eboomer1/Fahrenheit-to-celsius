// Listeners
document.getElementById('convert').addEventListener('click', convert)
// functions
function convert(){
    let farenheit = document.getElementById('input').value;
    farenheit = (farenheit - 32) * 5/9;
    farenheit = farenheit * 100;
    farenheit = Math.round(farenheit);
    farenheit = farenheit / 100;
    document.getElementById('output').innerHTML = farenheit;

    // multiply the temp by 100    

    // use Math.round to round the temperature, resave this into the variable

    // divide temp by 100


    // 17.777777...
    // 1777.77777777....
    // 1777
    // 17.77
}