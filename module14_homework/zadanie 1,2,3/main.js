// Задание 1
const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>

  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNodes = [...listNode.querySelectorAll("student")];
const list = [];
studentNodes.forEach( studentNode => {
  
  const nameNode = studentNode.querySelector("name");
  const langAttr = nameNode.getAttribute('lang');
  const firstNode = studentNode.querySelector("first");
  const secondNode = studentNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  list.push({
    prof: profNode.textContent,
    first: firstNode.textContent,
    second: secondNode.textContent,
    lang: langAttr,
    age: Number(ageNode.textContent),
  });
});

const result = {
  list: list
};
console.log('result', result);

// Задание 2
const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
 
   const resul = JSON.parse(jsonString);
   console.log(resul);


  


// Задание 3
    function sendRequest(){
    let input = document.getElementById('input').value;
    if(input < 1 || input > 10){
        document.getElementById('img').innerHTML = "Числов вне диапазона от 1 до 10";

    }else{
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://picsum.photos/v2/list?limit=' + input);
        xhr.onload = function (){
            if (xhr.status != 200){
                console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                let img = JSON.parse(xhr.response);
                let resul = "";
                for (let i = 0; i <img.lenght; i++){
                    resul += `<img src = "${img[i].download_url}" width = "200">`;
                }
                document.getElementById('img').innerHTML = resul;
            }
        };
        xhr.onerror = function(){
            console.log("Запрос не удался");
        };
        xhr.send();
    }
}



 