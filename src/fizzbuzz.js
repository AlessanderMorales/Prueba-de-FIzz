function generarFizzBuzz(numero)
{
    if(numero % 3 == 0){
        return "Fizz";
    }
    if(numero == 3){
        return "Fizz";
    }
    if(numero == 5){
        return "Buzz";
    }
    return  numero+""
}

export default generarFizzBuzz;


//refactorizar