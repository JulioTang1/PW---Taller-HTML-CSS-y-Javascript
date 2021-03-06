$(function(){
    agregarpropietario();
    editarPropietario();
});

function agregarpropietario(){
    $("#add").on("click",function(ev){
        ev.preventDefault();
        var nombre = $('input[id=nombre]');
        var apellido = $('input[id=apellido]');
        var direccion = $('input[id=direccion]');
        var telefono = $('input[id=telefono]');

        $('#lista').append("<tr>" + 
            "<td>"+nombre.val()+"</td>"+
            "<td>"+apellido.val()+"</td>"+
            "<td>"+direccion.val()+"</td>"+
            "<td>"+telefono.val()+"</td>"+
            "<td><submit name='editar' class='editar'> Agregar Mascota</button></td>"+
            "</tr>");
        nombre.val('');
        apellido.val('');
        direccion.val('');
        telefono.val('');
    });
}

function editarPropietario(){
    $('#lista').on('click','.editar',function(ev){
        ev.preventDefault();
        var tr = $(this).closest('tr');
        var tdNombre = tr.children('td:nth-child(1)');
        var tdApellido = tr.children('td:nth-child(2)');
        var tdDireccion = tr.children('td:nth-child(3)');
        var tdTelefono = tr.children('td:nth-child(4)');
        var tdEditar = tr.children ('td:nth-child(5)');
        
        tdNombre.html("<input id='txtNombre' value='"+tdNombre.html()+"'/>");
        tdApellido.html("<input id='txtApellidos' value='"+tdApellido.html()+"'/>");
        tdDireccion.html("<input id='txtDirección' value='"+tdDireccion.html()+"'/>");
        tdTelefono.html("<input id='txtTeléfono' value='"+tdTelefono.html()+"'/>");
        tdEditar.html("<button class='guardar'>Guardar</button>");
    });
}