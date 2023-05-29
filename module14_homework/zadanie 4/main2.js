// Задание 4
function submitInputs(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    if(isNaN(input1) || isNaN(input2) || input1 < 100 || input1 > 300 || input2 < 100 || input2 > 300) {
        document.getElementById("output").innerHTML = "Одно из чисел вне диапазона от 100 до 300";
    } else {
        let url = "https://picsum.photos/" + input1 + "/" + input2;
        fetch(url).then(response => {
            let img = document.createElement('img');
            img.src = url;
            document.getElementById("output").appendChild(img);
        });
    }
};