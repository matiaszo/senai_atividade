var nome_global;
var mensagem_global;
var date_global;


function formatarData(date){
    var options = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    return date.toLocaleString("pt-BR", options)
}


function conferir_mensagem_whatsapp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();
    
    nome_global = nome;
    mensagem_global = mensagem;
    date_global = date;

    document.getElementById("conf_nome").textContent = nome;
    document.getElementById("conf_msg").textContent = mensagem;
    document.getElementById("conf_date").textContent = formatarData(date);

}

function enviar(){
    var numero_telefone = "5541991576895"
    var link  = "https://wa.me/" + numero_telefone + "?text=NOME DO CLIENTE: " + nome_global + " - " + mensagem_global + " - " + formatarData(date_global);
    console.log(link)
    window.open(link, "_blank")
}
