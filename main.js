function clickc(){
    guardad=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3cJ6Z_yfH/",cargacion)
}
function cargacion(){
    console.log("cargado")
    guardad.classify(gotResults)
}
function gotResults(error,results){
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        uwgd=results[0].label
        presision=Math.floor((results[0].confidence)*100)+"%"
        document.getElementById("spam").innerHTML=uwgd
        document.getElementById("span").innerHTML=presision
        if (uwgd=="gato") {
            document.getElementById("id1").src="gato.gif"
            document.getElementById("id2").src="perro.jpg"
                     
        } else if (uwgd=="perro") {
            document.getElementById("id1").src="Gato.jpg"
            document.getElementById("id2").src="perro.webp"
                       
        
        }
    }}
