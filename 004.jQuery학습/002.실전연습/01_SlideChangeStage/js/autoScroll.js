// 자동스크롤 기능 JS - autoScroll.JS //

////////// 전역변수 구역 //////////////////////
// 현재페이지번호
let pno = 0;
// 전체 페이지 개수(상수로 설정하여 변경불가!)
const totnum = 7;
// 광스크롤막기 상태변수(0-허용, 1-불허용)
let psts = 0;



$(function(){ ////// jQB ///////////////////////
    /* 
        [ 자동스크롤 구현! ]

        1. 기능: 마우스휠을 위나 아래로 작동시킬때
            페이지가 위나 아래로 자동으로 애니메이션 되는 기능

        2. 이벤트: 마우스 휠을 움직일때 발생하는 이벤트는?
            - mousewheel (오리지널 이벤트) -> 파이어폭스 지원안함!
            - wheel (신규이벤트-벤더사의 웹표준이 아직아님!)
                -> 사파리지원안함
            - DOMMouseScroll (파이어폭스 전용이벤트)
            -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로 
            mousewheel + DOMMouseScroll 을 같이 사용할 것임!

        3. 마우스 휠 이벤트와 함수를 연결하는 방법 :
        - on(이벤트명,함수)
        -> on메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
        (참고로 bind(이벤트명,함수)제이쿼리 버전3부터 지원중단!)
        
        4. 마우스휠 이벤트 대상: 보통 document에 적용함!

        -> 중요한 업데이트 유의사항!!!
        document, body, window 객체는 이벤트를 막을 수 없다!
        - 2019년도에 위의 세가지 중요객체에 대하여 기본기능 막기를 
        할 수 없도록 브라우저 소스가 업데이트 되었는데 이유는
        모바일에서 에러가 발생하는 문제의 원인으로 지목되어
        본 3가지 중요객체에 대해서는 e.preventDefault() 또는
        return false를 사용한 기능막기를 못하도록 하였다!  

        예) 안되는 케이스
        $(document).on("click",function(e){
            e.preventDefault(); -> 에러!!!
        });
        $(window).on("click",function(e){
            e.return false(); -> 에러!!!
        });
        $(window).on("mousewheel",function(e){
            e.preventDefault(); -> 에러!!!
        });

        -> 에러를 우회하는 방법은 window, document, body대신에 
        내부에 전체부모박스를 하나 만들고 사용하는 방법이 있다!
    */

        ///////////////// 자동스크롤구현 ///////////////////////
        // 사용메서드: on(이벤트명, 함수)
        // -> 이벤트명에 띄어쓰기로 여러개의 이벤트를 사용할 수 있다
        // 이벤트명에 일반용과 파이어폭스용 이벤트는 모두 쓴다!
        // 해당되는 이벤트가 적용된다!
        // 대상: document
        $(document).on("mousewheel DOMMouseScroll",function(e){

            // e.preventDefault();
            // return false();
            // 기본막기시 에러발생! 왜? documnent니까
            // 스크롤안되게 하려고 html,body에 
            // css로 overflow:hidden을 줘서 기본기능을 대신 막는다!
            // -> 원래 원페이지 자동스크롤 사이트는 스크롤바트랙대신
            // 별도의 표시자(인디케이터)를 구현해준다!
            // console.log("마우스휠~!");

            /////////////////////////////////////
            // 0.광스크롤막기 ////////////////////
            /////////////////////////////////////
            if(psts) return; // 1이면 나가
            psts = 1; // 막기
            setTimeout(() => {
                psts = 0; // 해제
            }, 800); /// 타임아웃 ///
            // 스크롤이동시간만큼 막아준다!




            ////////////////////////////////
            // 1. 마우스 휠 방향 알아내기  //
            ///////////////////////////////

            // e변수로 들어오는 이벤트전달값으로 알아낸다!
            e = window.event || e;
            // 이벤트 전달값이 window오리지널 이벤트(자바스크립트 원래 이벤트)가 유효하면
            // 사용할 수 있도록 보완코드를 작성해야한다!
            // 변수 = 경우1 || 경우2;
            // 변수의 경우1과 경우2 중 true(유효한것)이 먼저 할당됨!

            /* 
                [ 마우스휠 방향 알아내기 위한 값 -> wheelDelta ]
                - 휠델타란? 마우스 이벤트에 따라 발생하는 
                이벤트 횟수 및 방향, 이동거리 등의 정보를 제공함
                - ie, chrome 등 브라우저 공용
                - opera브라우저는 detail을 사용함
            */
            let delta = e.detail ? e.detail : e.wheelDelta;
            // delta변수에 유효한 설정이 적용되어 할당된다!
            // 조건연산자(삼항연산자) -> 비?집:놀이동산;

            // console.log("휠델타정보:"+delta);

            
            //////////////////////////////////////////
            //// 파이어폭스일때 델타값 반대로 하기 //////
            // 방법:
            // JS의 내장함수 test()를 사용하여 
            // 브라우저 정보를 읽어오는 navigator.userAgent를 이용!
            // 브라우저 정보안에 "Firefox"라는 정보가 있으면 
            // test()에서 true를 리턴함! 파이어폭스인지 알 수 있음!


            // console.log("브라우저정보:"+navigator.userAgent);
            // console.log("정보여부:"+/Firefox/i.test(navigator.userAgent));

            /* 
                [ test() 정규식 메서드 ]
                정규식.test(값) -> 값에 정규식문자가 있으면 true를 리턴!

                [ 간단한 정규식 표현기호 ]
                1. 정규식 내용은 따옴표를 쓰지않고 슬래쉬 사이에 쓴다.
                2. 모든 패턴 문자열은 찾을때는 g라는 플래그 문자를 씀.
                3. 대소문자 구분없이 찾으려는 i라는 플래그 문자를 씀
                예) /,/g
                    -> 모든 콤마를 찾아라!
                    /firefox/i
                    -> 대소문자 관계없이 "firefox"문자를 찾아라!
                    /my/gi
                    -> 대소문자 관꼐없이 "my"문자를 모두 찾아라!
            */
           /////// 파이어폭스 브라우저 이면 델타값 부호를 반대로 한다!!!
            if(/Firefox/i.test(navigator.userAgent)){
                delta = -delta; //변수앞에 마이너스를 쓰면 부모반대!
            } //////////////// 파이어폭스 여부 if문 ////////////////////



            //////////////////////////////////////////
            /// 2. 마우스휠 방향에따라 페이지번호 증감하기! ///
            /////////////////////////////////////////////////
            // 전역변수에 페이지번호 변수가 필요하다! -> pno - 첫째줄에 변수 선언했음!

            if(delta < 0){ // -120아랫방향 스크롤(다음페이지)
                
                pno++; //페이지번호증가

                // 한계수 설정 - 끝번호에 고정
                if(pno === totnum) pno = totnum - 1;


            } /////// if ///////////////////////////////////////////
            else { // 120 윗방향 스크롤 (이전페이지)

                pno--; // 페이지번호감소  
                
                // 한계수 설정 - 첫번호(0)에 고정   (동등비교=== )    pno = 0 할당
                if(pno === -1) pno = 0;

            } /////////////// else //////////////////////////////////

            console.log("페이지번호:"+pno);

            ////////////////////////////////////////////
            // 3. 전체 윈도우 화면 높이값 단위로 이동위치 만들기 ///
            // .page의 top값으로 구하면 되지만 새로운 버전의 
            // 제이쿼리에서 씽크 불일치가 발생함!
            ///////////////////////////////////////////
            let pos = $(window).height() * pno;
            // $(window).height() 윈도우 높이값

            console.log("이동위치:"+pos);

            //////////////////////////////////////////////////
            // 4. 실제 위치로 페이지 이동하기 ////////////////
            ///////////////////////////////////////////////
            // 전체 스크롤 이동대상 : html,body 
            //                      -> 두개 다 잡는게 브라우저 공통임!
            $("html,body").animate({
                scrollTop: pos + "px"
            }, 800, "easeInOutExpo");

            // 이징 사이트 https://easings.net/ko 


        }); ///////////////// mousewheel이벤트함수 ////////////////////
        /////////////////////////////////////////////////////////////



}); ///////////////// jQB //////////////////
////////////////////////////////////////////