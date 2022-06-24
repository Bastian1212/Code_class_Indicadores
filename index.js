const indicadoresBuilder = require("./fabrica/indicadoresBuilder");



const express = require('express')
const app = express()


let indicador1 = new indicadoresBuilder("C01").makeCalificacionCORFO("Crítico").makeNumeroIndicador("01").makeMisionUniversitaria("Segunda").makeNombre("prueba").makeTipoIndicador("Proceso").makeEje("Comercialización de Tecnología y Emprendimiento de Base Tecnológica").makeUnidad("-").makeFuenteInformacion("-").makeResponsable("-").makeFrecuencia("-").makePeticion("Aprobado").makeidMetrica(0).makeidMeta(0).build();







app.set('port',3000)

app.get('/', (req, res) =>{
    res.send("CalificacionCORFO: " + indicador1.getCalificacionCORFO())
    
})


app.listen(app.get('port'), ()=>{

    console.log("3000 ")

})