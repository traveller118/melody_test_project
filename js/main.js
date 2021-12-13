$(document).ready(function () {
    var currentFloor = 2; //переменная где хранится значение текущего этажа
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /*Кнопка увеличения этажа*/
    var counterDown = $(".counter-down"); /*Кнопка уменьшения этажа*/

    //Наведение мышкой на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor"); //Удаляем активный класс этажа
        currentFloor = $(this).attr("data-floor"); //Получаем текущее значение этажа
        $(".counter").text(currentFloor); //Записываем значение этажа в счетчик справа
    });

    //Счетчик вверх
    counterUp.on("click", function () { //Клик по кнопке вверх
       if (currentFloor < 18) { //проверка значения этажа
        currentFloor++; //прибавляем 1 этаж
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, 
        useGrouping: false }); //форматируем переменную с этажем 
        $(".counter").text(usCurrentFloor);//Записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor"); //Удаляем активный класс этажа
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
       }
    });

    //Счетчик вниз
    counterDown.on("click", function () { //Клик по кнопке вверх
        if (currentFloor > 2) { //проверка значения этажа
            currentFloor--; //уменьшаем на 1 этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
            useGrouping: false }); //форматируем переменную с этажем 
            $(".counter").text(usCurrentFloor); //Записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor");//Удаляем активный класс этажа
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
        }
    });
});