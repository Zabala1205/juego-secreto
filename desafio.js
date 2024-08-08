let listaGenerica = [];
let lenguagesDeProgramación = ['JavaScript','C','C++','Kotlin','Pyhton'];


lenguagesDeProgramación.push ('Java');
lenguagesDeProgramación.push ('Ruby');
lenguagesDeProgramación.push ('GoLang');

function mostrarLenguagesSeparados(){
    for (let i = 0; i < lenguagesDeProgramación.length;i++){
        console.log(lenguagesDeProgramación[i]);
    }
}
mostrarLenguagesSeparados();

function mostrarLenguagesInversos(){
    for (let i = lenguagesDeProgramación.length - 1; i>=0 ; i--){
        console.log(lenguagesDeProgramación[i]);
    }
}
mostrarLenguagesInversos ();

function calculoProm(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista [i];
    }
    return suma / lista.length;
}
let numeros = [10,20,30,40,50];
let media =calculoProm (numeros);
console.log('Media: ', media);

function encontrarMayorMenor(lista){
    let mayor = lista [0];
    let menor = lista [0];

    for (let i = 1;i<lista.length;i++){
        if (lista [i]>mayor){
            mayor = lista [i];
        }
        if (lista[i]<menor){
            menor = lista[i];       
         }
    }
    
    console.log ('Mayor: ', mayor);
    console.log ('Menor: ', menor);
}

let numeros1 = [15,8,25,5,12];
encontrarMayorMenor (numeros1);

function calcularSuma(lista) {
    let suma1 = 0;
    for (let i = 0; i < lista.length; i++) {
      suma1 += lista[i];
    }
    return suma1;
  }
  
  let numeros2 = [15, 8, 25, 5, 12];
  let suma1 = calcularSuma(numeros2);
  console.log('Suma:', suma1);

  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  function sumarListas(lista1, lista2) {
//Esta función toma dos listas de números del mismo tamaño y devuelve una nueva lista con la suma de los elementos en el mismo índice.
  
    //Args:      lista1: La primera lista de números.
   //            lista2: La segunda lista de números.
  //Returns:    Una nueva lista con la suma de los elementos en el mismo índice de lista1 y lista2.
  
    if (lista1.length !== lista2.length) {
      throw new Error("Las listas deben tener el mismo tamaño");
    }
  
    return lista1.map((numero, indice) => numero + lista2[indice]);
  }
  
  function elevarAlCuadrado(lista) {
//    Esta función toma una lista de números y devuelve una nueva lista con el cuadrado de cada elemento.  
  //  Args:  lista: La lista de números.
    //Returns:Una nueva lista con el cuadrado de cada elemento de lista.
    return lista.map(numero => numero * numero);
  }
  
  // Ejemplo de uso
  const lista1 = [1, 2, 3];
  const lista2 = [4, 5, 6];
  const sumaListasResultado = sumarListas(lista1, lista2);
  const cuadradosResultado = elevarAlCuadrado(lista1);
  
  console.log("La suma de las listas elemento a elemento es:", sumaListasResultado);
  console.log("El cuadrado de cada elemento en la lista es:", cuadradosResultado);
  