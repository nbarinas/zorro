const searchForm = document.getElementById('searchForm');
const resultDiv = document.getElementById('result');
const databaseUrl = "./data/database.json";

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('identifier').value.trim();
    
    if (searchInput) {
        console.log('Buscando:', searchInput);
        fetch(databaseUrl)
            .then(response => {
                console.log('Respuesta del servidor:', response);
                return response.json();
            })
            .then(data => {
                console.log('Datos recibidos:', data);
                const result = data.users.find(entry => entry.id === searchInput || entry.phone === searchInput);
                if (result) {
                    resultDiv.innerHTML = `
                        <p><strong>Numero de identificacion:</strong> ${result.id}</p>
                        <p><strong>Nombre:</strong> ${result.name}</p>
                        <p><strong>Teléfono:</strong> ${result.phone}</p>  
                    `;
                }                 else {
                    resultDiv.innerHTML = '<p>No se encontraron registros. Puede participar</p>';
                }
            })
            .catch(error => {
                console.error('Error al obtener la base de datos:', error);
                resultDiv.innerHTML = '<p>Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.</p>';
            });
    } else {
        resultDiv.innerHTML = '<p>Por favor, ingrese un ID o número de teléfono válido.</p>';
    }
});