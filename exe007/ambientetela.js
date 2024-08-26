var valores = [4, 6, 8, 3]

valores.sort()
console.log(valores)
/*
for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(var pos in valores) {
    console.log(`A posção ${pos} tem o valor ${valores[pos]}`)
}