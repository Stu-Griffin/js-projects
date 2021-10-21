const a = ['audio/020.mp3', 'audio/021.mp3', 'audio/022.mp3', 'audio/023.mp3', 'audio/024.mp3', 'audio/025.mp3']
const b = [document.getElementById("btn1"),document.getElementById("btn2"),document.getElementById("btn3"),document.getElementById("btn4"),document.getElementById("btn5"),document.getElementById("btn6")]
function test(array) {
    var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = array; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
}
function btnTest() {
    for(let i = 0; i < b.length; i++) {
        b[i].addEventListener('click', () => {
            new Audio(a[i]).play(); 
            return false
        });
    }
}
btnTest()
function sound(e) {
    if(e.keyCode === 65) {
        test('audio/020.mp3')
    } else if(e.keyCode === 83) {
        test('audio/021.mp3')
    } else if(e.keyCode === 68) {
        test('audio/022.mp3')
    } else if(e.keyCode === 70) {
        test('audio/023.mp3')
    } else if(e.keyCode === 71) {
        test('audio/024.mp3')
    } else if(e.keyCode === 72) {
        test('audio/025.mp3')
    }
}
addEventListener("keydown", sound);