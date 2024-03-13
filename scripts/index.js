//First
let newArr = new Array();
let arrStr = ['Hello', 'Oranges', 'Age']
let maxSize = 0;
let strWord;
arrStr.forEach(element =>{
    if(maxSize <= element.length){
        maxSize = element.length;
        strWord = element;
    }
})
newArr = strWord.split('');
console.log(newArr);
//Second
function marker(text,color,number){
    var span = document.createElement('span');
    span.textContent = text;
    span.style.color = color;
    span.style.fontSize = number + 'px'; 
    span.style.fontFamily = 'Comic Sans MS';
    
    document.body.appendChild(span);
}
marker('Hello world!', 'grey', '32');
//third
var box = document.querySelector("#box");
function placeImages(arrStr){
    
    for(let i = 0;i<arrStr.length;i++){
        var image = document.createElement('img');
        image.src = arrStr[i];
        // Пробую сделать через innerHTML, [object HTMLImageElement] - он выставляет на страницу это, так как img - это объект HTMLElement, а не текст HTML
        //box.innerHTML +=  image;
        box.appendChild(image);
    }

}
placeImages(['img/band.jpg','img/bear.png','img/bob.jpg']);