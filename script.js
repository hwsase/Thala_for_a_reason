function inputSubmit() {
    let input = document.getElementById("input").value
    if (input === "") {
        return
    }
    let inputSplit = input.split("")

    if (isNaN(Number(input))) {
        console.log("it is text")
        checkThalaForaReason(input, inputSplit.length)
    } else {
        console.log("it is number")
        let res = 0
        for (let i=0; i<= inputSplit.length - 1; i++) {
            res += Number(inputSplit[i])
            console.log(Number(inputSplit[i]))
        }
        checkThalaForaReason(input, res)
    }
   
        
}

function checkThalaForaReason(inp, length) {
    let result = document.getElementById("result")
    if (length === 7) {
        result.innerText = (inp + " is Thala For a Reason")
        result.style.display = "block"
        var sound = document.getElementById('success-sound');
        sound.play();

    } else {
        result.innerText = ("Jaldi Wahan Se Hata Ho ...")
        result.style.display = "block"
        var sound = document.getElementById('not-success');
        sound.play();
    }

}
    
