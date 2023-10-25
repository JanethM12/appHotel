import {modeloReserva} from '../models/ModeloReserva.js'
class ServicioReserva{
    constructor(){}

   async registrarReserva(datos){
    let reservaNueva = new modeloReserva(datos)
    return await reservaNueva.save()
   }
   async buscarHabitacion(id){
    let habitacion = await modeloHabitacion.findById(id)
    return habitacion
   }
   async buscarHabitaciones(){
    let habitaciones = await modeloHabitacion.find()
    return habitaciones
   }
   async modificarHabitacion(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
   }
   async borrarHabitacion(){}
}