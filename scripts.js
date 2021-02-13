function listaAdmin() {

    /* 
    
    Lê o nome das adminstradoras de cartão no arquivo admincartoes.json e carrega em uma lista drop-down
    
    */
    var listaAdmin = '';

    $.getJSON('admincartoes.json', function (cartoes) {
        for (linha = 0; linha < cartoes.length; linha++) {
            listaAdmin += '<option/>' + cartoes[linha].nome;
        }
        $('#lista').html(listaAdmin);

    })

}

listaAdmin() // Carrega a lista dropdown imediatamente ao carregar a página

function calculaValor() {

    /*
    
    Carrega as taxas da administradora a partir do arquivo admincartoes.json e calcula os valores a receber a partir
    do valor de tabela inserido no formulario conforme a adminstradora escolhida na lista dropdown
    
    Lista as taxas e os valores calculados no formulário
    
    */
    var admin = (document.getElementById("lista").selectedIndex);
    var valor = document.getElementById("valor").value;
    var valCredAV = 0;
    var valCredAV14d = 0;
    var valCredAV30d = 0;
    var valCredParAV = 0;
    var valCredPar14d = 0;
    var valCredPar30d = 0;
    var valDebito = 0;
    var valDebitoCT = 0;
    var valPix = 0;
    var txCredAV = 0;
    var txCredAV14d = 0;
    var txCredAV30d = 0;
    var txCredParAV = 0;
    var txCredPar14d = 0;
    var txCredPar30d = 0;
    var txDebito = 0;
    var txDebitoCT = 0;
    var txPix = 0;

    if (valor < 0) alert('O valor não pode ser menor que 0 (zero)')

    else {

        $.getJSON('admincartoes.json', function (idAdmin) {
            valCredAV = + (valor * idAdmin[admin].CredAV);
            txCredAV = + ((idAdmin[admin].CredAV) - 1) * 100;
            document.getElementById("txCredAV").innerHTML = txCredAV.toFixed(2) + "%";
            document.getElementById("valCredAV").innerHTML = "R$ " + valCredAV.toFixed(2);
            txCredAV14d = + ((idAdmin[admin].CredAV14d) - 1) * 100;
            valCredAV14d = + (valor * idAdmin[admin].CredAV14d);
            document.getElementById("txCredAV14d").innerHTML = txCredAV14d.toFixed(2) + "%";
            document.getElementById("valCredAV14d").innerHTML = "R$ " + valCredAV14d.toFixed(2);
            txCredAV30d = + ((idAdmin[admin].CredAV30d) - 1) * 100;
            valCredAV30d = + (valor * idAdmin[admin].CredAV30d);
            document.getElementById("txCredAV30d").innerHTML = txCredAV30d.toFixed(2) + "%";
            document.getElementById("valCredAV30d").innerHTML = "R$ " + valCredAV30d.toFixed(2);
            txCredParAV = + ((idAdmin[admin].CredParAV) - 1) * 100;
            valCredParAV = + (valor * idAdmin[admin].CredParAV);
            document.getElementById("txCredParAV").innerHTML = txCredParAV.toFixed(2) + "%";
            document.getElementById("valCredParAV").innerHTML = "R$ " + valCredParAV.toFixed(2);
            txCredPar14d = + ((idAdmin[admin].CredPar14d) - 1) * 100;
            valCredPar14d = + (valor * idAdmin[admin].CredPar14d);
            document.getElementById("txCredPar14d").innerHTML = txCredPar14d.toFixed(2) + "%";
            document.getElementById("valCredPar14d").innerHTML = "R$ " + valCredPar14d.toFixed(2);
            txCredPar30d = + ((idAdmin[admin].CredPar30d) - 1) * 100;
            valCredPar30d = + (valor * idAdmin[admin].CredPar30d);
            document.getElementById("txCredPar30d").innerHTML = txCredPar30d.toFixed(2) + "%";
            document.getElementById("valCredPar30d").innerHTML = "R$ " + valCredPar30d.toFixed(2);
            txDebito = + ((idAdmin[admin].Debito) - 1) * 100;
            valDebito = + (valor * idAdmin[admin].Debito);
            document.getElementById("txDebito").innerHTML = txDebito.toFixed(2) + "%";
            document.getElementById("valDebito").innerHTML = "R$ " + valDebito.toFixed(2);
            if (idAdmin[admin].DebitoCT != 0) {
                txDebitoCT = + ((idAdmin[admin].DebitoCT) - 1) * 100;
                valDebitoCT = + (valor * idAdmin[admin].DebitoCT);
                document.getElementById("txDebitoCT").innerHTML = txDebitoCT.toFixed(2) + "%";
                document.getElementById("valDebitoCT").innerHTML = "R$ " + valDebitoCT.toFixed(2);
            } else {
                document.getElementById("txDebitoCT").innerHTML = "-----";
                document.getElementById("valDebitoCT").innerHTML = "-----";
            }
            txPix = + ((idAdmin[admin].Pix) - 1) * 100;
            valPix = + (valor * idAdmin[admin].Pix);
            document.getElementById("txPix").innerHTML = txPix.toFixed(2) + "%";
            document.getElementById("valPix").innerHTML = "R$ " + valPix.toFixed(2);
        })
    }
}