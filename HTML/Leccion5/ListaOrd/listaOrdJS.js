alert("Hola, Aqui aras tu propia lista ordenada!");

let entidad = prompt("Cuantas filas tendra tu lista?");

let campo = prompt("Cuantos campos de info tendrán?");

let entidades = [];

if (entidad == 0 && entidad >= 4) {
    alert("No creaste ninguna order - list!!!");
} else {

    document.write(`<ol>`);

    for (let index = 0; index < entidad; index++) {
        entidades[[index]] = prompt(`Introduce tu entidad ${index}: `);
        document.write(`
            <li>${entidades[[index]]}</li>
        `);

        for (let indice = 0; indice < campo; indice++) {
            entidades[[index], [indice]] = prompt(`Introduce la informacion de la entidad ${index}: `);
            document.write(`
            <ol>
            <li>${entidades[[index], [indice]]}</li>
            </ol>
        `);

        }
    }

    document.write(`</ol>`);

}
