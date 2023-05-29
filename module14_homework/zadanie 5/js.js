const pageInput = document.querySelector("#page");
const limitInput = document.querySelector("#limit");
const button = document.querySelector("button");
const imagesList = document.querySelector(".images-list");

let page = localStorage.getItem("page") || 1;
let limit = localStorage.getItem("limit") || 10;

pageInput.value = page;
limitInput.value = limit;

function getImages(){
    page = parseInt(pageInput.value);
    limit = parseInt(limitInput.value);

    if (isNaN(page) || page < 1 || page > 10){
        imagesList.innerHTML ="Номер страницы вне диапазона от 1 до 10";
        return;
    }
    if(isNaN(limit) || limit < 1 || limit > 10){
        imagesList.innerHTML = "Лимит вне диапазона от 1 до 10";
        return;
    }
    localStorage.setItem('page', page);
    localStorage.setItem('limit', limit);

    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

    fetch(url).then((response) => response.json()).then((data) => {
        let result = "";
        data.forEach((item) => {
            result += `<img src="${item.download_url}" alt="${item.author}" width="300" height="200">`;
        });
        imagesList.innerHTML = result;
    })
    .catch(() => {
        imagesList.innerHTML = 'Произошла ошибка при загрузке данных';
    });
}

button.addEventListener('click', getImages);