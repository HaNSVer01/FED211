// 파일럿 PJ 메인 JS - main.js

$(function(){

    //////////////////////////////////////
    // 배너 드래그 기능 구현하기 //////////
    //////////////////////////////////////
    // 드래그 대상: .slide
    let slide = $(".slide");

    // 드래그 기능주기 -> 제이쿼리UI 기능!
    slide.draggable({
        axis:"x" /// x축고정
    }) ///////// draggable //////////////////

}); /////////////// jQB //////////////////////
