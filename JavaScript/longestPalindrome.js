var convert = function(s, numRows) {
    if (numRows === 1) return s;  // Si hay una sola fila, no hay zigzag

    let rows = Array.from({ length: numRows }, () => ""); // Array para almacenar cada fila
    let index = 0;  // Índice para saber en qué fila estamos
    let direction = 1; // Dirección: 1 para abajo, -1 para arriba

    for (let char of s) {
        rows[index] += char; // Agregar el caracter a la fila correspondiente
        
        if (index === 0) direction = 1;        // Si estamos en la primera fila, bajamos
        if (index === numRows - 1) direction = -1; // Si estamos en la última fila, subimos
        
        index += direction; // Cambiamos de fila según la dirección
    }

    return rows.join(""); // Unimos todas las filas en una sola cadena
};

// Ejemplo de uso:
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
