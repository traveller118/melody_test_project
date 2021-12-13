$(document).ready(function () {
    var currentFloor = 2; //переменная где хранится значение текущего этажа
    var currentFlat = 1; //переменная с номером квартиры
    var currentDF = 1; 
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /*Кнопка увеличения этажа*/
    var counterDown = $(".counter-down"); /*Кнопка уменьшения этажа*/
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    var flatPath = $(".flat path");
    var FlatListLi = $(".flat-list li");

    //Наведение мышкой на изображение квартиры

    flatPath.on("mouseover", function() {
         let currentFlatListLi = $(this).attr("data-flat") -1; //Получаем текущее значение квартиры
        $(`.flat-link:eq(${currentFlatListLi})`).toggleClass("flat-link-mouseover");
    });
    flatPath.on("mouseout", function() {
        $('.flat-link').removeClass('flat-link-mouseover');
    });

    //Наведение мышкой на список квартиры

    FlatListLi.on("mouseover", function() {
        FlatListLi.removeClass("current-floor");
        currentFlat = $(this).attr("data-fitem");
        $(`[data-flat=${currentFlat}]`).toggleClass("flat-path-mouseover");
      });
    FlatListLi.on("mouseout", function() {
        $(`.flat path`).removeClass("flat-path-mouseover");
    });
    
    //Наведение мышкой на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor"); //Удаляем активный класс этажа
        currentFloor = $(this).attr("data-floor"); //Получаем текущее значение этажа
        $(".counter").text(currentFloor); //Записываем значение этажа в счетчик справа
    });

    floorPath.on('click', toggleModal); /* Вызвать окно */
    modalCloseButton.on('click', toggleModal); /* Закрывает окно */
    viewFlatsButton.on('click', toggleModal);
    
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
    function toggleModal () { //Ункция открыть-закрыть окно
        modal.toggleClass("is-open");}

   //Список
   dataFItem.on("mouseover", function() {
    $(`.flat-list li:eq(${currentFlatOrder})`).addClass("flat-link-mouseover");
    dataFItem.removeClass("flat-mouseover");
    currentDF = $(this).attr("data-fitem");
    usCurrentDF = currentDF.toLocaleString("en-US", {minimumIntegerDigits: 2, 
    useGrouping: false }); //форматируем переменную с этажем 
    $(`[data-fitem=${usCurrentDF}]`).toggleClass("flat-mouseover");
});



    //Наведение мышкой квартиру
    flats.on("mouseover", function() {
        floorPath.removeClass("current-floor"); //Удаляем активный класс этажа
        currentFloor = $(this).attr("data-floor"); //Получаем текущее значение этажа
        $(".counter").text(currentFloor); //Записываем значение этажа в счетчик справа
    });

    
 

  
    floorPath.on('click', toggleModal); /* Вызвать окно */
    modalCloseButton.on('click', toggleModal); /* Закрывает окно */
    viewFlatsButton.on('click', toggleModal);
});
