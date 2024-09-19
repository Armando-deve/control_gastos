let listaNombreGasto = [];
let listaValorGasto =[];
let producto =[];

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionProducto= document.getElementById('descripcionProducto').value;
   
    if(Number(valorGasto)>150){
    alert("costo arriba de lo estimado")
    }

    listaNombreGasto.push(nombreGasto);
    listaValorGasto.push(valorGasto);
    producto.push(descripcionProducto);
    actualizarListaGastos();

   


  
}
function actualizarListaGastos(){
    const listaElemento = document.getElementById('listaDeGastos');
    const totalElemento = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombreGasto.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValorGasto[posicion]);
        const descripcionProducto = producto[posicion];
        htmlLista += `<li> ${elemento} ${valorGasto.toFixed(2)}-USD
        <br> ${descripcionProducto}
         <button  onclick="editar(${posicion});">Actualizar</button>
         <button  onclick="eliminar(${posicion});">Eliminar</button>
        </li>`;
    // calcular gastos 

    totalGastos += Number(valorGasto);
    });

  listaElemento.innerHTML = htmlLista;
  totalElemento.innerHTML = totalGastos.toFixed(2); 
  limpiar();
}
function limpiar(){
    nombreGasto = document.getElementById('nombreGasto').value = '';
    valorGasto = document.getElementById('valorGasto').value= '';
    descripcionProducto= document.getElementById('descripcionProducto').value='';

}
function eliminar(posicion){
    listaNombreGasto.splice(posicion,1);
    listaValorGasto.splice(posicion,1);
    actualizarListaGastos();

}
function editar(posicion){
    document.getElementById('nombreGasto').value =  listaNombreGasto[posicion];
    document.getElementById('valorGasto').value = listaValorGasto[posicion];
    document.getElementById('descripcionGasto').value = producto[posicion];
    document.getElementById("botonFormulario").innerText = "Actualizar";
}