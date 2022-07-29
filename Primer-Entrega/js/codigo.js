
let valor = parseInt( prompt("Buen dia, por favor ingrese el monto total de su compra."))

while(valor < 0){
    valor = parseInt(prompt("Monto ingresado invalido, por favor vuelva a intentarlo")) 
}   
let cuotas = parseInt(prompt("Ahora ingrese el número de cuotas en las que desee hacer la compra:\n  3: 5% de interes.\n 6: 10% de interes. \n 12: 15% de interes. \n 24: 35% de interes."))

let porcCuota 

let porcentaje = [5, 10, 15]
porcentaje.push (35)
switch (cuotas) {
    case 3: porcCuota = porcentaje[0]
    break;
    case 6: porcCuota = porcentaje[1]
    break;
    case 12: porcCuota = porcentaje[2]
    break;
    case 24: porcCuota = porcentaje[3]
    break;
    default:
        alert("Selecciono una cantidad de cuotas erronea, por favor recargue la pagina e inicie nuevamanete el proceso.")
        break;
    }
    
    function total(valor, cuotas) {
        let resultado = valor / cuotas    
        let porc = resultado / 100 * porcCuota
        let cuotaTotal = resultado + porc
        return cuotaTotal
    }
    let final = total(valor,cuotas);
    document.write("Usted deberá abonar " + cuotas + " cuotas de $" + final)
    
    
                
    
    








    
