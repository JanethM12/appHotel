export class ControladorReservas{
    constructor() {}
    registrarReserva(request, response){
        try{//esculcar
            let datosRegistroReserva=request.body
            //responder
            response.status(200).json({"mensaje":"Reserva Guardada con exito","datos":"acá van los datos que se guardaron"})

        }catch(error){
            //responder
            response.status(400).json({"mensaje":"No se pudo guardar su reserva"+error})
        }
    }
    buscarReserva(request, response){
        try{ //esculcar los parametros de la peticion
            let idBuscarReserva = request.params.id
            // validar el dato
            //intento buscar el dato en bd
            response.status(200).json({
                "mensaje":"Busqueda ejecutada con exito",
                "datos":"acá van los datos que se buscaron"})
        }catch(e){
            response.status(400).json({"mensaje":"No se pudo realizar la consulta"+error})
        }
    }
    buscarReservas(request, response){
        try{
            //Buscar los datos en bd
            //Responder
            //responder
            response.status(200).json({
                "mensaje":"Busqueda de reservas ejecutada con exito",
                "datos":"acá van los datos que se buscaron"})

        }catch(e){
            response.status(400).json({"mensaje":"No se pudo realizar la consulta"+error})
        }
    }
    modificarReserva(request, response){
        try{
            //Traer id a editar
            let idModificarReserva=request.params.id
            let datosModificarReserva=request.body
            //Validar
            //Intento buscar y modificar en bd
            //responder
            response.status(200).json({
                "mensaje":"Modificacion de reserva realizada con exito",
                "datos":"acá van los datos que se modificaron"})
        }catch(e){
            response.status(400).json({"mensaje":"No se pudo realizar el cambio solicitado"+error})
        }
    }
    borrarReserva(request, response){
        try{let idBorrarHabitacion=request.params.id
            //validar
            //Intento borrar
            //responder
            response.status(200).json({
                "mensaje":"Borrado de habitacion realizada con exito"})
        }catch(e){
            response.status(400).json({"mensaje":"No se pudo borrar la reserva"+error})
        }
    }
    
}