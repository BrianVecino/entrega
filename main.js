function saludar() {
    let Usuario = prompt("Ingrese su nombre");
    alert("Hola bienvenido "+Usuario);
}
saludar()

let opcion = prompt ("Ingrese A para ver los productos o B para salir")
if (opcion === "A"){
    let productos = prompt("productos en Stock coca-Cola , fanta y sprite. Para ver los precios ingresa el nombre del producto")
    switch (productos)
{
    case "coca-Cola": alert ("500 Ml $40 , 1.5 L. $80 , 2L $160");   
    break;

    case "sprite": alert ("500 Ml $30 , 1.5 L. $60 , 2L $120 ");
    break;

    case "fanta": alert ("500 Ml $20 , 1.5 L. $40 , 2L $80 ");
    break;

    default: alert ("Error de opcion")
        break;
}
}
else if(opcion ==="B");