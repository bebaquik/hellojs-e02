// reescreva usando:
// ES6+ (sem Babel)

let func =  () => {
  
   fixedTime = false
   requests = [29374 ,  876 , 23512 , 1237 ]
	if(!fixedTime){
	 soma = requests.reduce((acumulador, numero) => acumulador + numero, 0)
    } 	
	return soma
}
console.log(func())
