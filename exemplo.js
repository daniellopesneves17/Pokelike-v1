function buscaBinaria(arr, elemento) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (arr[meio] === elemento) {
      return meio; // Elemento encontrado, retorna o índice
    } else if (arr[meio] < elemento) {
      inicio = meio + 1; // Busca na metade direita
    } else {
      fim = meio - 1; // Busca na metade esquerda
    }
  }

  return -1; // Elemento não encontrado
}
