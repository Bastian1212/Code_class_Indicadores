console.log("FUnciona 1111");
const {indicadoresBuilder} = require('../fabrica/indicadoresBuilder');
let indicador1 = new indicadoresBuilder("C01").makeCalificacionCORFO("Crítico").makeNumeroIndicador("01").makeMisionUniversitaria("Segunda").makeNombre("prueba").makeTipoIndicador("Proceso").makeEje("Comercialización de Tecnología y Emprendimiento de Base Tecnológica").makeUnidad("-").makeFuenteInformacion("-").makeResponsable("-").makeFrecuencia("-").makePeticion(0).makeidMetrica(0).makeidMeta(0).build();
console.log("FUnciona");


describe('Casos de pruebas', ()=> {
    test('verificar CalificacionCORFO de indicador ', async () => {
        const calCORFO = indicador1.getCalificacionCORFO()
        expect(calCORFO).toEqual("Crítico");
    })

    test('verificar Eje de indicador ', async () => {
        const eje = indicador1.getEje()
        expect(eje).toEqual("Comercialización de Tecnología y Emprendimiento de Base Tecnológica");
    })
})