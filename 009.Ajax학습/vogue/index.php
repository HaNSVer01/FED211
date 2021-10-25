<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>파일럿 PJ</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/media.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/autoScroll.js"></script>
    <script src="js/common.js"></script>
    <script src="js/main.js"></script>
</head>

<body>
    <!-- 1. 상단영역 -->
    <div id="top">
        <header class="top ibx">
            <!-- 1-1.로고 -->
            <h1 id="logo">
                <a href="#">
                    <img src="images/main_logo.png" alt="파일럿로고">
                </a>
            </h1>
            <!-- 1-2.GNB메뉴 : 3개(배너,하단제외) -->
            <nav class="gnb">
                <ul>
                    <li class="bld">
                        배너순번 li 숨기기
                    </li>
                    <li>
                        <a href="#men">MEN</a>
                    </li>
                    <li>
                        <a href="#women">WOMEN</a>
                    </li>
                    <li>
                        <a href="#style">STYLE</a>
                    </li>
                </ul>
            </nav>

            <!-- 햄버거버튼 -->
            <div class="ham">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <!-- 전체메뉴박스 -->
            <!-- 같은 부모박스 아래 있어야 z-index비교로 햄버거버튼
            이 위에 올 수 있다! -->
            <div class="mbox">
                <!-- 
                    배경 동영상 : muted 소리없음, loop 반복재생
                -->
                <video src="images/disc2018.mp4" class="bgm" muted loop></video>
                <!-- 전체메뉴 -->
                <nav class="mlist">
                    <dl>
                        <dt><a href="#">MEN</a></dt>
                        <dd><a href="#">T-SHIRT</a></dd>
                        <dd><a href="#">JACKET</a></dd>
                        <dd><a href="#">TRAINING WARE</a></dd>
                        <dd><a href="#">BEACH WARE</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#">WOMEN</a></dt>
                        <dd><a href="#">T-SHIRT</a></dd>
                        <dd><a href="#">JACKET</a></dd>
                        <dd><a href="#">TRAINING WARE</a></dd>
                        <dd><a href="#">BEACH WARE</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#">STYLE</a></dt>
                        <dd><a href="#">COLLECTION</a></dd>
                        <dd><a href="#">SEASON AD</a></dd>
                        <dd><a href="#">STAR &amp; NEWS</a></dd>
                        <dd><a href="#">MAIN ITEM</a></dd>
                    </dl>
                </nav>
            </div>


        </header>
    </div>


    <!-- 2. 페이지영역 : 5개(하단영역포함) -->

    <!-- 2-1. 배너영역 -->
    <section id="ban" class="page nonesel nonedrag">
        <!-- 배너슬라이드 -->
        <ul class="slide">
            <li class="ban6"><span class="ir">배너6</span></li>
            <li class="ban1"><span class="ir">배너1</span></li>
            <li class="ban2"><span class="ir">배너2</span></li>
            <li class="ban3"><span class="ir">배너3</span></li>
            <li class="ban4"><span class="ir">배너4</span></li>
            <li class="ban5"><span class="ir">배너5</span></li>
        </ul>
        <!-- 배너블릿박스 -->
        <ol class="bindic">
            <li class="on">
                <a href="#">
                    <span class="bld">블릿</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="bld">블릿</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="bld">블릿</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="bld">블릿</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="bld">블릿</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="bld">블릿</span>
                </a>
            </li>
        </ol>

        <!-- 슬라이드 커버 -->
        <div class="cover"></div>

    </section>
    <!-- 2-2.남자패션영역 -->
    <section id="men" class="page">
        <ul class="pgc">
            <li class="imgc">
                <img src="./images/men02.png" alt="공유다!">
            </li>
            <li class="txtc">
                <h2>
                    <a href="men.html">
                        MEN'S<br>ESSENTIALS
                    </a>
                </h2>
            </li>
        </ul>
    </section>
    <!-- 2-2.여자패션영역 -->
    <section id="women" class="page">
        <ul class="pgc">
            <li class="txtc">
                <h2>
                    <a href="#">
                        WOMEN'S<br>ESSENTIALS
                    </a>
                </h2>
            </li>
            <li class="imgc">
                <img src="./images/women01.png" alt="여자">
            </li>
        </ul>
    </section>
    <!-- 2-3.스타일패션영역 -->
    <section id="style" class="page">
        <ul class="pgc">
            <li class="imgc">
                <img src="./images/style02.png" alt="여자스타일">
            </li>
            <li class="txtc">
                <h2 class="tm">
                    <a href="#">
                        MEN'S<br>STYLE
                    </a>
                </h2>
                <h2 class="tw">
                    <a href="#">
                        WOMEN'S<br>STYLE
                    </a>
                </h2>
            </li>
            <li class="imgc">
                <img src="./images/style03.png" alt="공유스타일">
            </li>
        </ul>
    </section>
    <footer id="info" class="page">
        <address>
            서울특별시 강남구 언주로 541 에프앤에프빌딩<br>
            사업자등록번호 : 214-86-09977 / 통신판매업 신고번호 : 제2011-서울강남-00086호 (주) 에프앤에프 / 대표 : 김창수<br>
            교환·반품 반송처 : (17384) 경기도 이천시 마장면 프리미엄아울렛로 113-37 F&amp;F 물류센터 디스커버리 물류부<br><br>

            고객센터　<em>080 - 820 - 8802</em> 　　
            평일 오전 9시 ~ 오후 6시 (토·일·공휴일 휴무) <br>
            A/S : 02 - 3474 - 8914　
            E - MAIL : <a href="mailto:discovery@fnf.co.kr" title="메일 보내기">discovery@fnf.co.kr</a> 　
            FAX : 02 - 520 - 0991 <br><br>

            COPYRIGHT F&amp;F CO.,LTD.ALL RIGHTS RESERVED
        </address>
    </footer>


    <!-- 3. 인디케이터(위치표시자) : 4개(배너포함,하단제외) -->
    <nav class="indic">
        <ul>
            <li class="on">
                <a href="#ban"><span>배너</span></a>
            </li>
            <li>
                <a href="#men"><span>남성의류</span></a>
            </li>
            <li>
                <a href="#women"><span>여성의류</span></a>
            </li>
            <li>
                <a href="#style"><span>스타일</span></a>
            </li>
        </ul>
    </nav>


</body>

</html>