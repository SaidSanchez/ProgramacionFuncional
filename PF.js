/*La empresa de abarrotes doña Julia tiene una lista de productos donde almacena
la clave del producto, su descripción precio, clasificación, cantidad de existencia, existencia mínima y máxima.
Doña Julia requiere generar varios reportes:

1) Número de productos con existencia mayor a 20.
2) Número de productos con existencia menos a 15.
3) Lista de productos con la misma clasificación y precio mayor 15.50
4) Lista de productos con precio mayor a 20.30 y menor a 45.00
5) Número de productos agrupados por su clasificación
*/

class Producto{
  constructor(id = '0', item= " ", precio = '0', clasificacion = " ", existencia = '0', existenciaMinima = '0', existenciaMaxima = '0'){
    this.id = id;
    this.item = item;
    this.precio = precio;
    this.clasificacion = clasificacion;
    this.existencia = existencia;
    this.existenciaMinima =existenciaMinima;
    this.existenciaMaxima =existenciaMaxima;
  }
}

class AbarrotesDAO{
  constructor(listaProductos){
    this.listaProductos = listaProductos;
  }
  productosExistenciaMayor(valor){
      return this.listaProductos.filter(producto => producto.existencia > valor);
  }
  productosExistenciaMenor(valor){
    return this.listaProductos.filter(producto => producto.existencia < valor);
  }
  productosMismaClasificacionPrecio(clasificacion, precio){
      return this.listaProductos.filter( producto => producto.precio > precio && producto.clasificacion === clasificacion);
  }
  productosEntrePrecio(num1,num2){
      return this.listaProductos.filter(producto => producto.precio > num1 && producto.precio < num2);
  }
  productosMismaClasificacion(clasificacion){
      return this.listaProductos.filter(producto => producto.clasificacion === clasificacion);
  }

}

let listaProductos = [];

listaProductos.push(new Producto(1, "Papa", 9.80, "Verdura", 50, 5, 100));
listaProductos.push(new Producto(2, "lechuga", 7.80 , "Verdura", 12, 5, 100));
listaProductos.push(new Producto(3, "Zanahoria", 12.20, "Verdura", 26, 5, 100));
listaProductos.push(new Producto(4, "Cebolla", 6.40, "Verdura", 60, 5, 100));
listaProductos.push(new Producto(5, "Tomate", 7.50, "Verdura", 60, 5, 100));
listaProductos.push(new Producto(6, "Manzana", 9.80, "Fruta", 24, 5, 100));
listaProductos.push(new Producto(7, "Papaya", 13.50, "Fruta", 13, 5, 100));
listaProductos.push(new Producto(8, "Mango", 18.30 , "Fruta", 15, 5, 100));
listaProductos.push(new Producto(9, "Naranja", 16.20, "Fruta", 32, 5, 100));
listaProductos.push(new Producto(10, "Coco", 25, "Fruta", 7, 5, 100));
listaProductos.push(new Producto(11, "Zucaritas", 55, "Cereal", 10, 5, 100));
listaProductos.push(new Producto(12, "FrutLoops", 52, "Cereal", 10, 5, 100));
listaProductos.push(new Producto(13, "Chachitos", 32 , "Cereal", 8, 5, 100));
listaProductos.push(new Producto(14, "Chocokisrpis", 48 , "Cereal", 10, 5, 100));
listaProductos.push(new Producto(15, "Cheerios", 42, "Cereal",9, 5, 100));
listaProductos.push(new Producto(16, "Bistec", 98, "Carnes", 15, 5, 100));
listaProductos.push(new Producto(17, "Molida", 89, "Carnes", 15, 5, 100));
listaProductos.push(new Producto(18, "Chuleta", 115, "Carnes", 16, 5, 100));
listaProductos.push(new Producto(19, "Puerco", 98, "Carnes", 16, 5, 100));
listaProductos.push(new Producto(20, "Pollo", 78 , "Carnes", 12, 5, 100));
listaProductos.push(new Producto(21, "Mascolor", 18.90, "Lavanderia", 20, 5, 100));
listaProductos.push(new Producto(22, "Ariel", 25, "Lavanderia", 12, 5, 100));
listaProductos.push(new Producto(23, "Ace", 25, "Lavanderia", 12, 5, 100));
listaProductos.push(new Producto(24, "Suavitel", 24, "Lavanderia", 12, 5, 100));
listaProductos.push(new Producto(25, "Cloro", 22, "Lavanderia", 12, 5, 100));
listaProductos.push(new Producto(26, "Sabritas", 15 , "Dulce", 25, 5, 100));
listaProductos.push(new Producto(27, "Cacahuates", 10, "Dulce", 32, 5, 100));
listaProductos.push(new Producto(28, "Mazapan", 25, "Dulce", 45, 5, 100));
listaProductos.push(new Producto(29, "Gomitas", 15, "Dulce", 45, 5, 100));
listaProductos.push(new Producto(30, "Pulparindo", 22, "Dulce", 29, 5, 100));



let a = new AbarrotesDAO(listaProductos);


console.log("1. Número de productos con existencia mayor a 20.");
console.log(a.productosExistenciaMayor(20));
console.log("");

console.log("2. Número de productos con existencia menos a 15.");
console.log(a.productosExistenciaMenor(15));
console.log("");

console.log("3. Lista de productos con la misma clasificación y precio mayor 15.50.");
console.log(a.productosMismaClasificacionPrecio("Fruta", 15.50));
console.log("");

console.log("4. Lista de productos con precio mayor a 20.30 y menor a 45.00.");
console.log(a.productosEntrePrecio(20.30, 45.00));
console.log("");

console.log("5. Número de productos agrupados por su clasificación.");
console.log(a.productosMismaClasificacion("Carnes"));
