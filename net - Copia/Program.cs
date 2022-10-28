 using net.modes;
int[] arrayInteiros = new int[3];

    arrayInteiros[0] = 72;
    arrayInteiros[1] = 64;
    arrayInteiros[2] = 50;

    Console.WriteLine("Percorrendo o array com for");
    for(int contador = 0; contador < arrayInteiros.Length; contador++ )
    {
        Console.WriteLine($"Posição N° {contador} - {arrayInteiros[contador]}");
    }

    Console.WriteLine("Percorrendo o array com o FOREACH");

    int contadorForeach = 0;
    foreach(int valor in arrayInteiros)
    {
        Console.WriteLine($"Posição N° {contadorForeach} - {valor}");
        contadorForeach++;
    }


















 //string opcao;
//while(true)

//{
   
   // Console.WriteLine("Digite uma opção:");
    //Console.WriteLine("1 - Cadastrar cliente");
    //Console.WriteLine("2 - Buscar Cliente");
    //Console.WriteLine("3 - Apagar Cliente");
    //Console.WriteLine("4 - Encerrar");

    //opcao = Console.ReadLine();
    //switch(opcao)
    //{
    //case "1":
      //  Console.WriteLine("Cadastro de cliente");
        //break;
    //case "2":
      //  Console.WriteLine("Busca de cliente");
        //break;
    //case "3":
      //  Console.WriteLine("Apagar cliente");
        //break;
    //case "4":
      //  Console.WriteLine("Encerrar");
        //Environment.Exit(0);
        //break;

    //default:
      //  Console.WriteLine("Opção invalida");
        //break;
   // }
    // Console.Clear();                  
//}