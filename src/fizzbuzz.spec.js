import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz" , () => {
    it("Generar el mimo numero si" , () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });

    it ("Generar el mimo numero si" , () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });

    it ("genera Fizz 3", () =>{
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });

    it("Multiplo de 3",() =>{
        expect(generarFizzBuzz(15)).toEqual("Fizz");
        expect(generarFizzBuzz(6)).toEqual("Fizz");
        expect(generarFizzBuzz(9)).toEqual("Fizz")
    })
     it("Generar para 5",() =>{
        expect(generarFizzBuzz(5)).toEqual("Buzz");
     })

});

