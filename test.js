const { indicadoresBuilder } = require('./fabrica/indicadoresBuilder');

let indicador1 = new indicadoresBuilder("C01").makeCalificacionCORFO("Crítico").makeNumeroIndicador("01").makeMisionUniversitaria("Segunda").makeNombre("prueba").makeTipoIndicador("Proceso").makeEje("Comercialización de Tecnología y Emprendimiento de Base Tecnológica").makeUnidad("-").makeFuenteInformacion("-").makeResponsable("-").makeFrecuencia("-").makePeticion(0).makeidMetrica(0).makeidMeta(0).build();

console.log("indicador1");
console.log(indicador1.getCalificacionCORFO());