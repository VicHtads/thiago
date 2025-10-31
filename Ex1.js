// Sistema de Controle de transações de banco

class banco{
    nome;
    associacao;
    static agencias = [];

    get getNomeBanco(){
        return banco.nome;
    }
    
    get getAssociaco(){
        return this.associacao;
    }

    get getAgencias(){
        return banco.agencias.push(this.agencias)
    }

    constructor(nome, associacao, agencias){
        banco.nome = nome
        this.associacao = associacao
        banco.agencias = agencias

    }

}