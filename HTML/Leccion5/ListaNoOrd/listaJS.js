alert("Hola, Aqui aras tu propia lista no ordenada!");

let entidad = prompt("Cuantas entidades tendra tu lista?");

let campo = prompt("Tus entidades cuantos campos de info tendrán?");

let entidades = [];

if (entidad == 0 || entidad >= 4) {
    alert("No creaste ninguna unorder - list!!!");
} else {

    document.write(`<ul>`);

    for (let index = 0; index < entidad; index++) {
        entidades[[index]] = prompt(`Introduce tu entidad ${index}: `);
        document.write(`
            <li>${entidades[[index]]}</li>
        `);

        for (let indice = 0; indice < campo; indice++) {
            entidades[[index], [indice]] = prompt(`Introduce la informacion de la entidad ${index}: `);
            document.write(`
            <ul>
            <li>${entidades[[index], [indice]]}</li>
            </ul>
        `);

        }
    }

    document.write(`</ul>`);

}

