//const indicadores = require("../negocio/indicadores");

const indicadores = require("../negocio /indicadores");



class indicadoresBuilder{
    constructor(id){
        this.id = id;
        return this;
    }

    makeCalificacionCORFO(CalificacionCORFO){
        this.CalificacionCORFO = CalificacionCORFO; 
        return this;
    }
    makeNumeroIndicador(NumeroIndicador){
        this.NumeroIndicador = NumeroIndicador; 
        return this; 
    }
    makeMisionUniversitaria(MisionUniversitaria){
        this.MisionUniversitaria = MisionUniversitaria; 
        return this;
    }
    makeNombre(nombre){
        this.nombre = nombre; 
        return this;
    }
    makeTipoIndicador(TipoIndicador){
        this.TipoIndicador = TipoIndicador; 
        return this; 
    }

    makeEje(eje){
        this.eje = eje;
        return this;
    }


    ////////////////////////////////////////////
    makeUnidad(Unidad){
        this.Unidad = Unidad;
        return this; 
    }

    makeFuenteInformacion(FuenteInformacion){
        this.FuenteInformacion = FuenteInformacion; 
        return this;
    }

    makeResponsable(Responsable){
        this.Responsable = Responsable;
        return this; 
    }

    makeFrecuencia(Frecuencia){

        this.Frecuencia = Frecuencia;
        return this; 
    }

    ////////////////////////////////////////////
    makePeticion(Peticion){
        this.Peticion = Peticion;
        return this; 
    }

    makeidMetrica(idMetrica){
        this.idMetrica = idMetrica; 
        return this; 

    }
    makeidMeta(idMeta){
        this.idMeta = idMeta; 
        return this; 

    }
    

    build(){

        let i = new indicadores(this);
        return i; 
    }



}


module.exports = {indicadoresBuilder};
