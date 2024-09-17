const cerrarSesion = document.querySelector('#cerrarSesion');

cerrarSesion.addEventListener('click', async () => {
    try {
        const response = await fetch("/api/sessions/logout", {
            method: 'GET',
            credentials: 'include' 
        });
        if (response.status === 200) {
            window.location.href = "/login";
        }
    } catch (e) {
        console.log("Error al cerrar sesión:", e);
    }
});
