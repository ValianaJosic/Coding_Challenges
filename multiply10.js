for(var i = 1; i <= 10; i++)
{
    printTable(i);
    println("");
}

function printTable(n)
{
    for(var i = 1; i <= 10; i++)
    {
        var row = n + " * " + i + " = " + n * i;
        println(row);
    }
}
