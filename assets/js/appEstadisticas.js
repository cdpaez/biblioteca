
document.getElementById('cuadro_busqueda').addEventListener('keydown', () => {
    const buscarEnBibliotecaBD = indexedDB.open('BibliotecaDB', 1);
    buscarEnBibliotecaBD.onsuccess = (event) => {
        let peticion = event.target.result;
        let CI = document.getElementById('cuadro_busqueda').value;
        let obtenerInformacionUsuario = peticion
            .transaction('usuarios', 'readonly')
            .objectStore('usuarios')
            .get(CI);
        obtenerInformacionUsuario.onsuccess = (event) => {
            let datosUsuario = event.target.result;
            console.log('los datos encontrados son',datosUsuario);
        }
    };
});


/*
cuadro de busqueda
*/

