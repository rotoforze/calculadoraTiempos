function resolver() {
    document.querySelector('.error').hidden = true;
    const frames = document.getElementById("frames").value;
    const tipoCalculo = document.querySelector('#tipoCalculo').checked;

    const primeraHora = Number(document.getElementById("primeraHora").value);
    const segundaHora = Number(document.getElementById("segundaHora").value);

    const primerMinuto = Number(document.getElementById("primerMinuto").value);
    const segundoMinuto = Number(document.getElementById("segundoMinuto").value);

    const primerSegundo = Number(document.getElementById("primerSegundo").value);
    const segundoSegundo = Number(document.getElementById("segundoSegundo").value);

    const primerFrame = Number(document.getElementById("primerFrame").value);
    const segundoFrame = Number(document.getElementById("segundoFrame").value);

    var resultadoHora = !tipoCalculo ? primeraHora + segundaHora : primeraHora - segundaHora;
    var resultadoMinuto = !tipoCalculo ? primerMinuto + segundoMinuto : primerMinuto - segundoMinuto;
    var resultadoSegundo = !tipoCalculo ? primerSegundo + segundoSegundo : primerSegundo - segundoSegundo;
    var resultadoFrame = !tipoCalculo ? primerFrame + segundoFrame : primerFrame - segundoFrame;
    console.log(resultadoHora, resultadoMinuto, resultadoSegundo, resultadoFrame)


    while (resultadoHora < 0 && primeraHora > segundaHora && tipoCalculo) {
        console.log(resultadoHora + "<0")
        resultadoHora++;
        resultadoMinuto -= 60;
    }

    while (resultadoMinuto < 0 && primerMinuto > segundoMinuto && tipoCalculo) {
        console.log(resultadoMinuto + "<0");
        resultadoMinuto++;
        resultadoSegundo -= 60;
    }

    while (resultadoSegundo < 0 && primerSegundo > segundoSegundo && tipoCalculo) {
        console.log(resultadoSegundo + "<0");
        resultadoSegundo++;
        resultadoFrame -= frames;
    }

    try {
        if (resultadoFrame < 0) {
            throw new Error('no se puede deber frames.');
        } else if (resultadoSegundo < 0) {
            throw new Error('no se puede deber segundos.');
        } else if (resultadoMinuto < 0) {
            throw new Error('no se puede deber minutos.');
        } else if (resultadoHora < 0) {
            throw new Error('no se puede deber horas.');
        }
    } catch (error) {
        console.error(error);
        document.querySelector('.error').hidden = false;
        document.querySelector('.error b').textContent = error;
        return null;
    }

    while (resultadoFrame >= frames) {
        console.log(resultadoFrame + ">" + frames)
        resultadoFrame -= frames;
        resultadoSegundo++;
    }


    while (resultadoSegundo >= 60) {
        console.log(resultadoSegundo + ">60")
        resultadoSegundo -= 60;
        resultadoMinuto++;
    }

    while (resultadoMinuto >= 60) {
        console.log(resultadoMinuto + ">60")
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