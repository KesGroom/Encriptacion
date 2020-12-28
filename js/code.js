window.addEventListener('load', function () {

    var txtEnc = document.getElementById('textBoxEncriptOne'),
        txtResultEnc = document.getElementById('txtResultOne');

    txtEnc.addEventListener('keyup', function () {
        var letras = txtEnc.value.replace(/\s/gm, "").split("");
        var encriptado = "";
        for (let index = 0; index < letras.length; index++) {
            const element = letras[index];
            var letra = encriptar(element);
            encriptado = encriptado + letra;
        }
        txtResultEnc.textContent = encriptado;
    })
});