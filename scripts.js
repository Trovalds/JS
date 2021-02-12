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
        document.getElementById("CredAV").innerHTML = "Crédito à Vista: " + CredAV;
        CredAV14d = + (valor * idAdmin[admin].CredAV14d);
        document.getElementById("CredAV14d").innerHTML = "Crédito 14 Dias: " + CredAV14d;
        CredAV30d = + (valor * idAdmin[admin].CredAV30d);
        document.getElementById("CredAV30d").innerHTML = "Crédito 30 Dias: " + CredAV30d;
        CredParAV = + (valor * idAdmin[admin].CredParAV);
        document.getElementById("CredParAV").innerHTML = "Crédito Parcelado à Vista: " + CredParAV;
        CredPar14d = + (valor * idAdmin[admin].CredPar14d);
        document.getElementById("CredPar14d").innerHTML = "Crédito Parcelado 14 Dias: " + CredPar14d;
        CredPar30d = + (valor * idAdmin[admin].CredPar30d);
        document.getElementById("CredPar30d").innerHTML = "Crédito Parcelado 30 Dias: " + CredPar30d;
        Debito = + (valor * idAdmin[admin].Debito);
        document.getElementById("Debito").innerHTML = "Débito: " + Debito;
        DebitoCT = + (valor * idAdmin[admin].DebitoCT);
        document.getElementById("DebitoCT").innerHTML = "Débito Caixa Tem: " + DebitoCT;
        Pix = + (valor * idAdmin[admin].Pix);
        document.getElementById("Pix").innerHTML = "PIX: " + Pix;
    })
}