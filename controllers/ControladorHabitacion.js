import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
export class ControladorHabitacion{
    constructor() {}
    async registrarHabitacion(request, response){
        try{
            let servicioHabitacion= new ServicioHabitacion()
            //esculcar
            let datosRegistroHabitacion=request.body
            // Guardar
            await servicioHabitacion.registrarHabitacion(datosRegistroHabitacion)
            //responder
            response.status(200).json({
                "mensaje":"Habitación Guardada con exito",
                "datos":datosRegistroHabitacion})
        }catch(error){
            //responder
            response.status(400).json({"mensaje":"No se pudo guardar"+error})
        }
    }
    async buscarHabitacion(request, response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //esculcar los parametros de la peticion
            let idBuscarHabitacion = request.params.idBuscarHabitacion
            // validar el dato
            //intento buscar el dato en bd
            response.status(200).json({
                "mensaje":"Busqueda ejecutada con exito",
                "datos":await servicioHabitacion.buscarHabitacion(idBuscarHabitacion)
            })
        }catch(error){
            response.status(400).json({"mensaje":"No se pudo realizar la consulta"+error})
        }
    }
    async buscarHabitaciones(request, response){
        try{

            //Buscar los datos en bd
            //responder
            response.status(200).json({
                "mensaje":"Busqueda de habitaciones ejecutada con exito",
                "datos":"acá van los datos que se buscaron"})
        }catch(error){
            response.status(400).json({"mensaje":"No se pudo realizar la consulta"+error})
        }
    }
    async modificarHabitacion(request, response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //1. Intentar buscar los datos en BD
            //2. Responder
            respuesta.status(200).json({
                "mensaje": "Exito en la operacion de busqueda",
                "datos": await servicioHabitacion.buscarHabitaciones()
            })

            
        }catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion de buscado"+error
            })
        }
    }
    async borrarHabitacion(request, response){
        try{
            let idBorrarHabitacion=request.params.id
            //validar
            //Intento borrar
            //responder
            response.status(200).json({
                "mensaje":"Borrado de habitacion realizada con exito"})
        }catch(error){
            response.status(400).json({"mensaje":"No se pudo borrar la habitacion"+error})
        }
    }
    
}
