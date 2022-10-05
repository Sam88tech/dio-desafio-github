using net.modes;
 
Calculadora calc = new Calculadora();

calc.Somar(10, 30);
calc.Subtrair(10, 50);
calc.Multiplicar(2, 30);
calc.Dividir(10, 2);
calc.Potencia(3, 3);
calc.Seno(30);
calc.Coseno(30);
calc.Tangente(30);
calc.RaizQuadrada(16);

int numero = 10;
Console.WriteLine(numero);
Console.WriteLine("Incremento o 10");
numero = numero +1;
Console.WriteLine(numero);


int numero1 = 20;
Console.WriteLine(numero1);
Console.WriteLine("Incremento o 10");
numero1 = numero1 -1;
Console.WriteLine(numero1);



int num = 1;

for(int contador = 0; contador <= 10; contador ++)
{
    Console.WriteLine($"{num} x {contador} = {num * contador}");
}

int num2 = 2;
int contador1 = 0;
while (contador1 <=10)
{
    Console.WriteLine($"{contador1+1}° Execução: {num2} x {contador1} = {num2 * contador1}");
    contador1 ++;
}
