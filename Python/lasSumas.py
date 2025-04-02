arr = [1,5,3,2]
num = 6
def sum (arr,num):
    resultado = []

    def backtrack(indice, actual, suma_actual):
        if suma_actual == num:
            resultado.append(actual[:])  # Agregar una copia de la combinación válida
            return
        
        if suma_actual > num or indice >= len(arr):
            return

        # Incluir el número actual en la combinación
        backtrack(indice + 1, actual + [arr[indice]], suma_actual + arr[indice])
        
        # No incluir el número actual y pasar al siguiente
        backtrack(indice + 1, actual, suma_actual)

    backtrack(0, [], 0)
    return resultado


print(sum(arr,num))