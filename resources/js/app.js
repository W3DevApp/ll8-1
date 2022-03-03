require('./bootstrap');

import Alpine from 'alpinejs';
// import Swal from 'sweetalert2';
window.Pikaday = require('pikaday');

global.$ = global.jQuery = require('jquery');
window.select2 = require('select2');

window.Alpine = Alpine;

Alpine.start();

// eliminar esto
// window.Swal = Swal;

// agregar esto si se va a hacer: run dev a cada rato

/* Esto se obtiene de app.blade.php en la zona de script
            Livewire.on('alert', function(message)
            {
                Swal.fire('Good!', message, 'success')
            });

*/