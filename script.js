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
