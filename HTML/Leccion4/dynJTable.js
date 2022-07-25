alert("Hola, Bienvenido, a continuacion introduce los campos para llenar la tabla!");

let nombreGame;
let añoGame;
let consolaLanzamiento;
let imagen;

let games = prompt("¿Cuantos juegos va a tener tu tabla?");
let gamesNumber = parseInt(games);

if (gamesNumber <= 5 && gamesNumber >= 1) {

    document.write(`<table>`);

    document.write(`
    <caption>
        Play Station Exclusives Games
    </caption>`);

    document.write(`
    <tr>
        <th>
            Game
        </th>
        <th>
            Release Year
        </th>
        <th>
            Release Console
        </th>

        <th>
            Image
        </th>
    </tr>`);

    for (let index = 0; index < gamesNumber; index++) {

        nombreGame = prompt("Nombre del juego: ");
        añoGame = prompt("Año de lanzamiento: ");
        consolaLanzamiento = prompt("Para que consola salio el juego?: ");
        imagen = prompt("URL de la imagen");
        document.write(`
        <tr>
        <td>
            ${nombreGame}
        </td>
        <td>
            ${añoGame}
        </td>

        <td>
            ${consolaLanzamiento}
        </td>

        <td>
            <img src="${imagen}" alt="">
        </td>
        </tr>`);
    }

    document.write(`/<table>`)

} else {
    alert("Lo siento el programa solo crea tablas hasta 5 juegos...")
}