document.addEventListener('DOMContentLoaded', function () {
    const carruseles = {
        'certificados-carrusel1': {
            contenedor: document.getElementById('certificados-carrusel1'),
            certificados: document.querySelectorAll('#certificados-carrusel1 .certificado'),
            indice: 0
        },
        'certificados-carrusel2': {
            contenedor: document.getElementById('certificados-carrusel2'),
            certificados: document.querySelectorAll('#certificados-carrusel2 .certificado'),
            indice: 0
        }
    };

    function mostrarCertificado(carrusel, direccion) {
        const { contenedor, certificados } = carrusel;
        carrusel.indice = (carrusel.indice + direccion + certificados.length) % certificados.length;
        const desplazamiento = -carrusel.indice * 100;
        contenedor.style.transform = 'translateX(' + desplazamiento + '%)';
    }

    document.querySelectorAll('.boton').forEach(boton => {
        boton.addEventListener('click', function () {
            const carrusel = carruseles[this.getAttribute('data-carrusel')];
            const direccion = this.classList.contains('siguiente') ? 1 : -1;
            mostrarCertificado(carrusel, direccion);
        });
    });

    document.querySelectorAll('.certificado img').forEach(img => {
        img.addEventListener('click', function () {
            window.open(this.src, '_blank');
        });
    });

    setInterval(() => mostrarCertificado(carruseles['certificados-carrusel1'], 1), 3000); // Carrusel 1 cambia cada 3 segundos
    setInterval(() => mostrarCertificado(carruseles['certificados-carrusel2'], 1), 5000); // Carrusel 2 cambia cada 5 segundos
});

/*document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.getElementById('certificados-carrusel');
    const certificados = document.querySelectorAll('.certificado');
    const btnAnt = document.getElementById('btnAnt');
    const btnSig = document.getElementById('btnSig');
    let indice = 0;
    let intervalo;

    function mostrarCertificado(indice) {
        const desplazamiento = -indice * 100;
        carrusel.style.transform = 'translateX(' + desplazamiento + '%)';
    }

    function mostrarSiguienteCertificado() {
        indice = (indice + 1) % certificados.length;
        mostrarCertificado(indice);
    }

    function mostrarAnteriorCertificado() {
        indice = (indice - 1 + certificados.length) % certificados.length;
        mostrarCertificado(indice);
    }

    btnSig.addEventListener('click', function () {
        clearInterval(intervalo);
        mostrarSiguienteCertificado();
        iniciarCarrusel();
    });

    btnAnt.addEventListener('click', function () {
        clearInterval(intervalo);
        mostrarAnteriorCertificado();
        iniciarCarrusel();
    });

    function iniciarCarrusel() {
        intervalo = setInterval(mostrarSiguienteCertificado, 3000); // Cambia cada 3 segundos
    }

    iniciarCarrusel();
});

document.addEventListener('DOMContentLoaded', function () {
    const carruseles = {
        federico: {
            element: document.getElementById('carrusel-federico'),
            index: 0,
            total: document.getElementById('carrusel-federico').querySelectorAll('.certificado').length
        },
        franco: {
            element: document.getElementById('carrusel-franco'),
            index: 0,
            total: document.getElementById('carrusel-franco').querySelectorAll('.certificado').length
        }
    };

    function moverCarrusel(nombre, direccion) {
        const carrusel = carruseles[nombre];
        carrusel.index = (carrusel.index + direccion + carrusel.total) % carrusel.total;
        const desplazamiento = -carrusel.index * 100;
        carrusel.element.style.transform = 'translateX(' + desplazamiento + '%)';
    }

    setInterval(() => moverCarrusel('federico', 1), 3000); // Carrusel automático para Federico
    setInterval(() => moverCarrusel('franco', 1), 3000); // Carrusel automático para Franco

    window.moverCarrusel = moverCarrusel; // Hacer la función accesible globalmente para los botones
});
*/
