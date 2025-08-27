function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco
    this.descricao = function() {
        return '\n' +'-----------------------'+ '\n' + 'Informações do Cliente: '+ '\n' +this.nome + '\n' + '-----------------------'+ '\n' + '-----------------------'+ '\n' + 'Telefone: ' +'\n'+ 'DDD: '+this.telefoneCelular.ddd +'\n'+ 'Número: '+ this.telefoneCelular.numero + '\n' + '-----------------------'+ '\n' + 'Endereço: ' + '\n' + 'Rua: '+ this.endereco.rua  + '\n' + 'Número: '+this.endereco.numero+'\n'+ 'Cidade: '+this.endereco.cidade + '\n' + 'Estado: '+this.endereco.estado+ '\n'
    }
}

function TelefoneCelular(ddd, numero){
    this.ddd = ddd
    this.numero = numero
}

function Endereco(estado, cidade, rua, numero){
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numero = numero
}

let telefone2 = new TelefoneCelular('12', '888888888')
let endereco2 = new Endereco('SP', 'Sao Jose', 'Av. Andromeda', '1000')
let cliente2 = new Cliente('Gerson da Penha Neto', telefone2, 'gerson.penha@fatec.sp.gov.br', endereco2)

let telefone4 = new TelefoneCelular('99', '11111111')
let endereco4= new Endereco('RJ', 'Belford Roxo', 'Av. Brasil', '3456')
let cliente4 = new Cliente('Zimmer Heimer', telefone4, 'zimmer.heimer@app.com', endereco4)

let telefone3 = new TelefoneCelular('12', '777777777')
let endereco3 = new Endereco('SP', 'Sao Jose', 'Av. Rui Barbosa', '2')
let cliente3 = new Cliente('Enrico de Chiara Germano', telefone3, 'enrico.germano@fatec.sp.gov.br', endereco3)

let telefone1 = new TelefoneCelular('11', '999999999')
let endereco1= new Endereco('SP', 'Sao Paulo', 'Av. Paulista', '987')
let cliente1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1)

clientes = [cliente1,cliente2, cliente3, cliente4]

clientes.sort((a,b) => a.nome.localeCompare(b.nome));

for (let index = 0; index < clientes.length; index++) {
    c = clientes[index]
    console.log(c.descricao())
}