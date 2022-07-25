alert("Hola, Aqui podrás crear tu propia lista descriptiva!");

let entidad = prompt("Cuantos temas tendra tu lista?");

let campo = prompt("Cuantos campos de info tendrán?");

let entidades = [];

if (entidad == 0 || entidad >= 4) {
    alert("No creaste ninguna order - list!!!");
} else {

    document.write(`<dl>`);

    for (let index = 0; index < entidad; index++) {
        entidades[[index]] = prompt(`Introduce tu fila ${index}: `);
        document.write(`
            <dt>${entidades[[index]]}</dt>
        `);

        for (let indice = 0; indice < campo; indice++) {
            entidades[[index], [indice]] = prompt(`Introduce la información que contendra tu fila ${index}: `);
            document.write(`
            <dd>${entidades[[index], [indice]]}</dd>
        `);

        }
    }
    document.write(`</dl>`);
}
