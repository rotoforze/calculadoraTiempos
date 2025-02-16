function resolver() {

    let frames = document.getElementById("frames").value;

    let primeraHora = Number(document.getElementById("primeraHora").value);
    let primerMinuto = Number(document.getElementById("primerMinuto").value);
    let primerSegundo = Number(document.getElementById("primerSegundo").value);
    let primerFrame = Number(document.getElementById("primerFrame").value);

    let segundaHora = Number(document.getElementById("segundaHora").value);
    let segundoMinuto = Number(document.getElementById("segundoMinuto").value);
    let segundoSegundo = Number(document.getElementById("segundoSegundo").value);
    let segundoFrame = Number(document.getElementById("segundoFrame").value);

    console.log(primeraHora+":"+primerMinuto+":"+primerSegundo+":"+primerFrame)
    console.log(segundaHora+":"+segundoMinuto+":"+segundoSegundo+":"+segundoFrame)

    let resultadoHora = primeraHora + segundaHora;
    let resultadoMinuto = primerMinuto + segundoMinuto;
    let resultadoSegundo = primerSegundo + segundoSegundo;
    let resultadoFrame = primerFrame + segundoFrame;
    console.log(resultadoHora+":"+resultadoMinuto+":"+resultadoSegundo+":"+resultadoFrame+"/"+frames)

    while (resultadoFrame >= frames) {
        console.log(resultadoFrame+">"+frames)
        resultadoFrame -= frames;
        resultadoSegundo++;
    }

    while (resultadoSegundo >= 60) {
        console.log(resultadoSegundo+">60")
        resultadoSegundo -= 60;
        resultadoMinuto++;
    }

    while (resultadoMinuto >= 60) {
        console.log(resultadoMinuto+">60")
        resultadoMinuto -= 60;
        resultadoHora++;
    }
    
    document.getElementById("primeraHora").value = resultadoHora;
    document.getElementById("primerMinuto").value = resultadoMinuto;
    document.getElementById("primerSegundo").value = resultadoSegundo;
    document.getElementById("primerFrame").value = resultadoFrame;

    document.getElementById("segundaHora").value = 0;
    document.getElementById("segundoMinuto").value = 0;
    document.getElementById("segundoSegundo").value = 0;
    document.getElementById("segundoFrame").value = 0;

}