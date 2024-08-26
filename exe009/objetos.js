var amigo = { nome: 'pedro', idade: 45, envelheceu(n=0) {
    console.log('envelheceu')
    this.idade += n
}}

migo.envelheceu(2)
console.log(`${amigo.nome} tem ${amigo.idade} anos. `)