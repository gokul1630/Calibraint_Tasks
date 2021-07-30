function total(num) {
    console.log(num);
}

function AddNumbers(var_1, var_b, callback) {
    let total = var_1 + var_b
    callback(total) // here total function is called and data is passed to function for printing data in console

}

AddNumbers(10,20,total) // total function is passed as Argument in another function for callback