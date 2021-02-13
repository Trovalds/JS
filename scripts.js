function listaAdmin() {

    var listaAdmin = '';

    $.getJSON('admincartoes.json', function (cartoes) {
        for (linha = 0; linha < cartoes.length; linha++) {
            listaAdmin += '<option/>' + cartoes[linha].nome;
        }
        $('#lista').html(listaAdmin);

    })

}

listaAdmin()

function calculaValor() {
    var admin = document.getElementById("lista").selectedIndex;
    var valor = document.getElementById("valor").value;
    var CredAV = 0;
    var CredAV14d = 0;
    var CredAV30d = 0;
    var CredParAV = 0;
    var CredPar14d = 0;
    var CredPar30d = 0;
    var Debito = 0;
    var DebitoCT = 0;
    var Pix = 0;

    $.getJSON('admincartoes.json', function (idAdmin) {
        CredAV = + (valor * idAdmin[admin].CredAV);
        document.getElementById("CredAV").innerHTML = CredAV.toFixed(2);
        CredAV14d = + (valor * idAdmin[admin].CredAV14d);
        document.getElementById("CredAV14d").innerHTML = CredAV14d.toFixed(2);
        CredAV30d = + (valor * idAdmin[admin].CredAV30d);
        document.getElementById("CredAV30d").innerHTML = CredAV30d.toFixed(2);
        CredParAV = + (valor * idAdmin[admin].CredParAV);
        document.getElementById("CredParAV").innerHTML = CredParAV.toFixed(2);
        CredPar14d = + (valor * idAdmin[admin].CredPar14d);
        document.getElementById("CredPar14d").innerHTML = CredPar14d.toFixed(2);
        CredPar30d = + (valor * idAdmin[admin].CredPar30d);
        document.getElementById("CredPar30d").innerHTML = CredPar30d.toFixed(2);
        Debito = + (valor * idAdmin[admin].Debito);
        document.getElementById("Debito").innerHTML = Debito.toFixed(2);
        DebitoCT = + (valor * idAdmin[admin].DebitoCT);
        document.getElementById("DebitoCT").innerHTML = DebitoCT.toFixed(2);
        Pix = + (valor * idAdmin[admin].Pix);
        document.getElementById("Pix").innerHTML = Pix.toFixed(2);
    })
}