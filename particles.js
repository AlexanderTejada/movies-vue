particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 150, // Reduce el número de partículas
            "density": {
                "enable": true,
                "value_area": 1000 // Aumenta el área para dispersarlas más
            }
        },
        "color": {
            "value": "#2bff40" // Color de las partículas
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.7, // Baja la opacidad para hacerlas más sutiles
            "random": true, // Hacer la opacidad de cada partícula aleatoria
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2, // Disminuye el tamaño de las partículas
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false // Desactiva las líneas entre partículas
        },
        "move": {
            "enable": true,
            "speed": 1.2, // Reduce la velocidad de movimiento para suavizar el efecto
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false // Desactiva la interacción con el mouse
            },
            "onclick": {
                "enable": false // Desactiva la interacción con clic
            },
            "resize": true
        }
    },
    "retina_detect": true
});
