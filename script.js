function calcular(){
    let quantia=document.getElementById('quantia').value
    quantia=parseFloat(quantia)
    let temperaturas=document.getElementById('temperaturas')
    let resultados=document.getElementById('res')
    let celsius=document.createElement('option')
    let farenheit=document.createElement('option')
    let kelvin=document.createElement('option')
    let rankine=document.createElement('option')

    if(temperaturas.value=='c'){
        resultados.innerHTML=' '
        farenheit.text=`${((quantia*1.8)+32).toFixed(2)} °F`
        kelvin.text=`${(quantia+273.15).toFixed(2)} K`
        rankine.text=`${((quantia+273.15)*1.8).toFixed(2)} °R`
        resultados.appendChild(farenheit)
        resultados.appendChild(kelvin)
        resultados.appendChild(rankine)
       /*console.log((quantia*1.8)+32)
       console.log(quantia+273)
       console.log((quantia+273.15)*1.8)*/
    }
    else if(temperaturas.value=='f'){
        resultados.innerHTML=' '
        celsius.text=`${((quantia-32)/1.8).toFixed(2)} °C`
        kelvin.text=`${(((quantia-32)*5/9)+273.15).toFixed(2)} K`
        rankine.text=`${(quantia+459.67).toFixed(2)} °R`
        resultados.appendChild(celsius)
        resultados.appendChild(kelvin)
        resultados.appendChild(rankine)
        /*console.log((quantia-32)/1.8)
        console.log((quantia-32)*1.8+273)
        console.log(quantia+459.67)*/
    }
    else if(temperaturas.value=='k'){
        resultados.innerHTML=' '
        celsius.text=`${(quantia-273.15).toFixed(2)} °C`
        farenheit.text=`${((quantia-273.15)*1.8+32).toFixed(2)} °F`
        rankine.text=`${(quantia*1.8).toFixed(2)} °R`
        resultados.appendChild(celsius)
        resultados.appendChild(farenheit)
        resultados.appendChild(rankine)
        /*console.log(quantia-273)
        console.log((quantia-273)*1.8+32)
        console.log(quantia*1.8)*/
    }
    else{
        resultados.innerHTML=' '
        celsius.text=`${((quantia*5/9)-273.15).toFixed(2)} °C`
        farenheit.text=`${(quantia-459.67).toFixed(2)} °F`
        kelvin.text=`${(quantia/1.8).toFixed(2)} K`
        resultados.appendChild(celsius)
        resultados.appendChild(farenheit)
        resultados.appendChild(kelvin)
        /*console.log((quantia/8)-273.15)
        console.log(quantia-459.67)
        console.log(quantia/1.8)*/
    }
}