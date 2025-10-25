// JS -> Prototype
class cachorro {
    nome;
    raca;
    idade;
    dono;
    constructor(nome, ccz) {
        this.nome = nome
        ccz.animal = this
    }

}
//nova classe
class CCZ {
    #animais = []

    set animal(ani)
    {
        this.#animais.push(ani)
    }

    get animal(){
        return this.#animais
    }
}

class pessoa {
    static nome;
    #din;
    historico = []
    static pessoas = []

    get dinheiro() {
        return this.#din
    }

    set dinheiro(valor) {
        this.historico.push(valor - this.#din)
        this.#din = valor
    }
    get getNome() {
         return pessoa.nome;
    }

    constructor(nome, dinheiro) {
        pessoa.nome = nome
        this.#din = dinheiro
        pessoa.pessoas.push(this)
    }

    static limparHistorico(p)
    {
        //Exercício
        console.log(p.historico.length +  ' Itens excluidos')
        p.historico = []
    }

    static limparHistoricoTodos()
    {
        pessoa.pessoas.forEach(p => p.historico = [])
    }
    
}

class busao {
    passageiros = []
    valorPassagem = 10
    embarcarPassageiro(passageiro) {
        //console.log(passageiro.nome + 'Passageiro tem dinheiro:' + Object.hasOwn(passageiro, 'dinheiro'))
        
        if (Object.hasOwn(Object.getPrototypeOf(passageiro), 'dinheiro')) {
            if (passageiro.dinheiro > this.valorPassagem) {
                this.passageiros.push(passageiro)
                passageiro.dinheiro -= this.valorPassagem
            }
        } else {
            // não dá certo
            // Object.hasOwn(Object.getPrototypeOf(passageiro), 'dinheiro')
           
            if(passageiro.dono){               
            if (passageiro.dono.dinheiro > this.valorPassagem) {
                //console.log("Tentativa de embarque sem dinheiro:"+passageiro)
                this.passageiros.push(passageiro)
                passageiro.dono.dinheiro -= this.valorPassagem
            }
        }
        }
    }
}

cczTL = new CCZ()

//cachorro.prototype.dinheiro = 100
Object.preventExtensions(Object.getPrototypeOf(cachorro))
let rex = new cachorro('rex', cczTL);

//rex.nome = 'rex'
//rex.dinheiro = 15
//rex.correnteOuro = '2 kilates'
//Object.freeze(rex)

console.log(rex.dinheiro)

let lessie = new cachorro('lessie', cczTL);
//lessie.nome = 'lessie'
//lessie.dinheiro = 13
let joao = new pessoa("Joao", 50)
let maria = new pessoa("Maria", 9)
maria.dinheiro += 20
console.log("Joao tem dinheiro?" + Object.hasOwn(joao, 'historico'))
// comprando um busao
const transLagoas = new busao()
//rex.dinheiro = 100;
transLagoas.embarcarPassageiro(rex)
transLagoas.embarcarPassageiro(lessie)
transLagoas.embarcarPassageiro(joao)
transLagoas.embarcarPassageiro(maria)
console.log("passageiros transLagoas")
console.log(transLagoas.passageiros)

let transSP = new busao()
transSP.valorPassagem = 15
transSP.embarcarPassageiro(joao)
transSP.embarcarPassageiro(joao)
console.log("passageiros transSP")
console.log(transSP.passageiros)


console.log("passageiros transLagoas")
console.log(transLagoas.passageiros)
joao.dinheiro -= 2
console.log(joao.historico)

console.log(maria.historico)
console.log(maria.dinheiro)

maria.historico.push(1000)
//após 1000 para a maria
console.log(maria.historico)
console.log(maria.dinheiro)

//animais registrados
console.log('animais registrados')
console.log(cczTL.animal)
console.log('Embarque TRANSLAGOAS')
rex.dono = joao
joao.dinheiro += 200
transLagoas.embarcarPassageiro(rex)
lessie.dono = maria
transLagoas.embarcarPassageiro(lessie)

console.log(transLagoas.passageiros)
console.log(transSP.passageiros)
pessoa.nome = 'maria'
pessoa.nome = 'Caio'
pessoa.nome = 'Joao'

for(let i = 0; i < transLagoas.passageiros.length; i++)
    console.log(transLagoas.passageiros[i].getNome)

for(let i = 0; i < transSP.passageiros.length; i++)
    console.log(transSP.passageiros[i].getNome)

let ze = new pessoa("zé", 10)
ze.dinheiro += 10
ze.dinheiro -= 2
console.log(ze);

pessoa.limparHistoricoTodos()
console.log(ze);
//pessoa.limparHistorico(joao)
console.log(joao)
//pessoa.limparHistorico(maria)
console.log(maria)