function generarFizzBuzz(numero)
{
    if(numero % 3 == 0){
        return "Fizz";
    }
    if(numero == 3){
        return "Fizz";
    }
    
    return  numero+""
}

export default generarFizzBuzz;


//refactorizar