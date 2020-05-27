// PC + Mobile: screen 값이 변동될 경우 특정 컨텐츠 초기화: 시작
$(window).resize(function(){
    fnContentReset();
    fnMenuClose();
    fnMenuTabReset1();
    fnMenuTabReset2();
});
// PC + Mobile: screen 값이 변동될 경우 특정 컨텐츠 초기화: 끝

// PC: 영역 외부 클릭시 컨텐츠와 모달 제거: 시작
$("#modalBg").click(function() {
    fnContentReset();
});

$("#desktopBar_modalCheck").click(function() {
    fnContentReset();
});
// PC: 영역 외부 클릭시 컨텐츠와 모달 제거: 끝

// PC: desktopBar의 하위 컨텐츠 활성화 효과: 시작
// (~Ln 263)
function fnContentReset() {
    // 1. 배정 값 초기화
    contentOn_game = 0;
    contentOn_Esports = 0;
    contentOn_myAccount = 0;

    // 2. 컨텐츠 비활성화
    $("#sub_game").css({ "display": "none" });
    $("#sub_Esports").css({ "display": "none" });
    $("#sub_myAccount_innerContent").css({ "display": "none" });

    // 3. 업-다운 브라켓 이미지 초기화
    $("#dB_game").find("img").attr("src", "images/icon/braket_down.png");
    $("#dB_Esports").find("img").attr("src", "images/icon/braket_down.png");
    $("#dB_myAccount").find("img").attr("src", "images/icon/braket_down.png");

    // 4. 모달 제거
    $("#modalBg").css({ "display": "none" });

    // 5. 변경된 header ul li a의 글자색 복원
    $("ul.mainMenu a").css({ "color": "rgb(201, 201, 201)" });

    // 6. 이미지 버티컬 해제
    $("#dB_game").removeClass("hiLi1");
    $("#dB_Esports").removeClass("hiLi1");
    $("#dB_myAccount").removeClass("hiLi1");

    // 7. 툴팁 배경 버티컬 해제
    $("#dB_game").find("span.toolTip").css({ "display": "none" });
    $("#dB_Esports").find("span.toolTip").css({ "display": "none" });
    $("#dB_myAccount").find("span.toolTip").css({ "display": "none" });
}

var contentOn_game = 0;

$("#dB_game").click(function() {
    if (contentOn_game == 0) {
        fnContentReset();

        $(this).find("img").attr("src", "images/icon/braket_up.png");
        $("#sub_game").css({ "display": "block" });

        $("ul.mainMenu a").css({ "color": "#808080" });
        $(this).css("color", "#fff");
        $("#modalBg").css({ "display": "block" });

        $(this).addClass("hiLi1");
        // 이미지 버티컬 강조

        $(this).find("span.toolTip").css({ "display": "block" });
        // 컨텐츠 배경 버티컬 생성

        contentOn_game++;
    } else {
        fnContentReset();
    }
});

// 컨텐츠 비활성화시 마우스 침범 기준 버티컬 강조
$("#dB_game").mouseover(function() {
    if (contentOn_game == 0) {
        $(this).addClass("hiLi1");
    }
});
$("#dB_game").mouseout(function() {
    if (contentOn_game == 0) {
        $(this).removeClass("hiLi1");
    }
});
// PC: desktopBar_game 컨텐츠 활성화 효과: 끝

// Mobile: #mobileMenu Active: 시작
$("#mobileMenu").click(function() {
    fnMenuClose();

    $("div#mobileMenuLeft").css({ "display": "block" });
    $("#modalBg").css({ "display": "block" });
    $("header").css({"filter":"brightness(80%)"})
});

$("div#mobileMenuLeft .menuExit").click(function() {
    fnMenuClose();
});

$("#mobileAccount").click(function() {
    fnMenuClose();
    
    $("div#mobileMenuRight").css({ "display": "block" });
    $("#modalBg").css({ "display": "block" });
    $("header").css({"filter":"brightness(80%)"})
});

$("div#mobileMenuRight .menuExit span").click(function() {
    fnMenuClose();
});
    
function fnMenuClose() {
    // reset
    $("header").css({"filter":"brightness(100%)"})

    // contents Off
    $("div#mobileMenuLeft").css({ "display": "none" });
    $("div#mobileMenuRight").css({ "display": "none" });
    
    // modal Off
    $("#modalBg").css({ "display": "none" });
}

$("#modalBg").click(function() {
    fnMenuClose();
});

$("#mobileBar_modalCheck").click(function() {
    fnMenuClose();
    $("#mobileMenuLeft").css({ "display": "none" });
    $("#mobileMenuRight").css({ "display": "none" });
});
// Mobile: #mobileMenu Active: 끝

// Mobile: #mobileMenuLeft ul#mainMenuList_game>li 컨텐츠 슬라이드 토글: 시작
var toggleCheck_menu_game = 0;

$("ul#mainMenuList_game>li>a").click(function(){
    fnMenuTabReset2();

    $(this).parent().find("ul").stop().slideToggle(200);
    if ( toggleCheck_menu_game == 0 ) {
        $(this).children("img").attr("src","images/icon/braket_up.png");
        toggleCheck_menu_game++;
    } else {
        $(this).children("img").attr("src","images/icon/braket_down.png");
        toggleCheck_menu_game--;
    }
});

var toggleCheck_menu_Esports = 0;

$("ul#mainMenuList_Esports>li>a").click(function(){
    fnMenuTabReset1();

    $(this).parent().find("ul").stop().slideToggle(200);
    if ( toggleCheck_menu_Esports == 0 ) {
        $(this).children("img").attr("src","images/icon/braket_up.png");
        toggleCheck_menu_Esports++;
    } else {
        $(this).children("img").attr("src","images/icon/braket_down.png");
        toggleCheck_menu_Esports--;
    }
});

function fnMenuTabReset1() {
    $("ul#mainMenuList_game>li>a").parent().find("ul").stop().slideUp(200);
    $("ul#mainMenuList_game>li>a>img").attr("src","images/icon/braket_down.png");
    toggleCheck_menu_game = 0;
}

function fnMenuTabReset2() {
    $("ul#mainMenuList_Esports>li>a").parent().find("ul").stop().slideUp(200);
    $("ul#mainMenuList_Esports>li>a>img").attr("src","images/icon/braket_down.png");
    toggleCheck_menu_Esports = 0;
}
// Mobile: div#mobileMenuLeft ul#mainMenuList_game>li 컨텐츠 슬라이드 토글: 끝

// PC: desktopBar_Esports 컨텐츠 활성화 효과: 시작
var contentOn_Esports = 0;

$("#dB_Esports").click(function() {
    if (contentOn_Esports == 0) {
        fnContentReset();

        $(this).find("img").attr("src", "images/icon/braket_up.png");
        $("#sub_Esports").css({ "display": "block" });

        $("ul.mainMenu a").css({ "color": "#808080" });
        $(this).css("color", "#fff");
        $("#modalBg").css({ "display": "block" });

        $(this).addClass("hiLi1");
        // 이미지 버티컬 강조

        $(this).find("span.toolTip").css({ "display": "block" });
        // 컨텐츠 배경 버티컬 생성

        contentOn_Esports++;
    } else {
        fnContentReset();
    }
});

// 컨텐츠 비활성화시 마우스 침범 기준 버티컬 강조
$("#dB_Esports").mouseover(function() {
    if (contentOn_Esports == 0) {
        $(this).addClass("hiLi1");
    }
});
$("#dB_Esports").mouseout(function() {
    if (contentOn_Esports == 0) {
        $(this).removeClass("hiLi1");
    }
});
// PC: desktopBar_Esports 컨텐츠 활성화 효과: 끝

// PC: desktopBar_myAccount 컨텐츠 활성화 효과: 시작
var contentOn_myAccount = 0;

$("#dB_myAccount").click(function() {
    if (contentOn_myAccount == 0) {
        fnContentReset();

        $(this).find("img").attr("src", "images/icon/braket_up.png");
        $("#sub_myAccount_innerContent").css({ "display": "block" });

        $("ul.mainMenu a").css({ "color": "#808080" });
        $(this).css("color", "#fff");
        $("#modalBg").css({ "display": "block" });

        $(this).addClass("hiLi1");
        // 이미지 버티컬 강조

        $(this).find("span.toolTip").css({ "display": "block" });
        // 컨텐츠 배경 버티컬 생성

        contentOn_myAccount++;
    } else {
        fnContentReset();
    }
});

// 컨텐츠 비활성화시 마우스 침범 기준 버티컬 강조
$("#dB_myAccount").mouseover(function() {
    if (contentOn_myAccount == 0) {
        $(this).addClass("hiLi1");
    }
});
$("#dB_myAccount").mouseout(function() {
    if (contentOn_myAccount == 0) {
        $(this).removeClass("hiLi1");
    }
});
// PC: desktopBar_myAccount 컨텐츠 활성화 효과: 끝
// PC: desktopBar의 하위 컨텐츠 활성화 효과: 끝



// PC + Mobile : 버튼을 눌러 지정된 .slideItem의 컨텐츠 전환 + 효과 설정 : 시작
// (~Ln 408)
var slideImgNum = 0;
var slideImgNum_blur = 0;
var slideOn = 0;
// 이미지 5장

// [1] slideImgNum_blur 값과 slideImgNum 값을 일치시키고
// [2] slideImgNum 값을 $(this).index()로 재지정한다
// [3] target Effect에서 슬라이드 방향을 판정한다
$(".slideBtn").click(function() {
    slideImgNum_blur = slideImgNum;
    if (slideOn == 0) {
        if (slideImgNum != $(this).index()) {
            slideImgNum = $(this).index();

            fnSlideEffect();
            slideContent_intervalEnd = 1;
        }
    }
});

// [1] slideImgNum_blur 값과 slideImgNum 값을 일치시키고
// [2] slideImgNum 값을 lt; Check 과정에서 재지정한다
// [3] target Effect에서 슬라이드 방향을 판정한다
$("#slideContent_MoveLeft").click(function() {
    if (slideImgNum == 0) {
        slideImgNum_blur = 1000;
        // lt; Check 과정에서 Num과 Num_blur의 수식 관계가 의도에 맞지 않게 변하므로 재조정
    } else {
        slideImgNum_blur = slideImgNum;
    }
    if (slideOn == 0) {
        // lt; Check
        if (slideImgNum == 0) {
            slideImgNum = 4;
        } else {
            slideImgNum--;
        }

        fnSlideEffect();
        slideContent_intervalEnd = 1;
    }
});

// [1] slideImgNum_blur 값과 slideImgNum 값을 일치시키고
// [2] slideImgNum 값을 gt; Check 과정에서 재지정한다
// [3] target Effect에서 슬라이드 방향을 판정한다
$("#slideContent_MoveRight").click(function() {
    if (slideImgNum == 4) {
        slideImgNum_blur = -1000;
        // gt; Check 과정에서 Num과 Num_blur의 수식 관계가 의도에 맞지 않게 변하므로 재조정
    } else {
        slideImgNum_blur = slideImgNum;
    }
    if (slideOn == 0) {
        // gt; Check
        if (slideImgNum == 4) {
            slideImgNum = 0;
        } else {
            slideImgNum++;
        }

        fnSlideEffect();
        slideContent_intervalEnd = 1;
    }
});

function fnSlideToNext() {
    if (slideImgNum == 4) {
        slideImgNum_blur = -1000;
        // gt; Check 과정에서 Num과 Num_blur의 수식 관계가 의도에 맞지 않게 변하므로 재조정
    } else {
        slideImgNum_blur = slideImgNum;
    }
    if (slideOn == 0) {
        // gt; Check
        if (slideImgNum == 4) {
            slideImgNum = 0;
        } else {
            slideImgNum++;
        }

        fnSlideEffect();
    }
}

function fnSlideEffect() {
    ++slideOn;
    setTimeout(function() { slideOn--; }, 800);

    // 슬라이드 방향 판정 1
    if (slideImgNum >= slideImgNum_blur) {
        // reset
        $("div#slideContentBox div.slideItem").stop().css({ "background-position-x": "150px" }).fadeOut(300).find("a *").css({ "opacity": "0", "left": "30px" });

        // effect
        $("div#slideContentBox div.slideItem").eq(slideImgNum).stop().fadeIn({ queue: false, duration: 800 }).animate({ "background-position-x": "30px" }, 800).animate({ "background-position-x": "0" }, 4000, "linear")
            .find("img").delay(600).animate({ "opacity": "1", "left": "0" }, 500)
            .parent().find("h1").delay(800).animate({ "opacity": "1", "left": "0" }, 500)
            .parent().find("span").delay(1000).animate({ "opacity": "1", "left": "0" }, 500);
    }

    // 슬라이드 방향 판정 2
    if (slideImgNum < slideImgNum_blur) {
        // reset
        $("div#slideContentBox div.slideItem").stop().css({ "background-position-x": "-150px" }).fadeOut(300).find("a *").css({ "opacity": "0", "left": "-30px" });

        // effect
        $("div#slideContentBox div.slideItem").eq(slideImgNum).stop().fadeIn({ queue: false, duration: 800 }).animate({ "background-position-x": "-30px" }, 800).animate({ "background-position-x": "0" }, 4000, "linear")
            .find("img").delay(600).animate({ "opacity": "1", "left": "0" }, 500)
            .parent().find("h1").delay(800).animate({ "opacity": "1", "left": "0" }, 500)
            .parent().find("span").delay(1000).animate({ "opacity": "1", "left": "0" }, 500);
    }

    // gaugeBar: button CSS Active
    $(".slideBtn").find("div").removeClass("active1");
    $(".slideBtn").eq(slideImgNum).find("div").addClass("active1");

    // background-color Match
    if (slideImgNum == 0) {
        $("#slideContentLayout").css({ "transition": "all 0.6s", "background-color": "#d2ae64" });
    } else if (slideImgNum == 1) {
        $("#slideContentLayout").css({ "transition": "all 0.6s", "background-color": "#0a1403" });
    } else if (slideImgNum == 2) {
        $("#slideContentLayout").css({ "transition": "all 0.6s", "background-color": "#000000" });
    } else if (slideImgNum == 3) {
        $("#slideContentLayout").css({ "transition": "all 0.6s", "background-color": "#280a30" });
    } else {
        $("#slideContentLayout").css({ "transition": "all 0.6s", "background-color": "#000000" });
    }

    // value Check
    // $("#valueCheck").html("slideImgNum: " + slideImgNum + "<br>slideImgNum_blur : " + slideImgNum_blur);
}

// 페이지 로드시 첫번째 컨텐츠 보여주기
$("#slideContentBox:first-child .slideItem").eq(slideImgNum).stop().fadeIn({ queue: false, duration: 800 }).animate({ "background-position-x": "40px" }, 800).animate({ "background-position-x": "0" }, 5000, "linear")
    .find("img").delay(600).animate({ "opacity": "1", "left": "0" }, 500)
    .parent().find("h1").delay(800).animate({ "opacity": "1", "left": "0" }, 500)
    .parent().find("span").delay(1000).animate({ "opacity": "1", "left": "0" }, 500);
// PC + Mobile : 버튼을 눌러 지정된 .slideItem의 컨텐츠 전환 + 효과 설정: 끝



// PC : 슬라이더 영역 진입 기준 버튼 활성화: 시작
$("#slideContentLayout").hover(function() {
    $(this).find("#slideContent_MoveBox").animate({"opacity":"1"}, 150);
}, function() {
    $(this).find("#slideContent_MoveBox").animate({"opacity":"0"}, 150);
})
// PC : 슬라이더 영역 진입 기준 버튼 활성화: 끝



// PC + Mobile : .active1>div의 애니메이션이 끝나면 .slideItem 변경 : 시작
// [1] 슬라이드 영역에 마우스를 올리면 애니메이션을 초기화하고
$("#slideContentLayout").mousemove(function() {
    $(".active1>div").stop();
    $(".active1>div").css({"width": "0"});
});

// [2] 마우스가 영역을 벗어나면 다시 진행함
$("#slideContentLayout").mouseleave(function() {
    fnSlideSetInterval();
});

// 유저가 버튼을 클릭해 슬라이드 컨텐츠를 변경하면
// 아래의 변수 값을 1로 대입하고
// 더이상 버튼 애니메이션을 작동하지 않도록 함
var slideContent_intervalEnd = 0;

fnSlideSetInterval();
function fnSlideSetInterval() {
    if ( slideContent_intervalEnd == 0 ) {
        $(".active1>div").animate({"width":"100%"}, 5000, "linear", function() {
            $(this).css({ "width": "0" });
            fnSlideToNext();

            // repeat
            fnSlideSetInterval();
        })
    }
}
// PC + Mobile : .active1>div의 애니메이션이 끝나면 .slideItem 변경 : 시작

// PC: 버튼 클릭에 따른 gamePanel_flexBox의 scrollLeft 값 조정: 시작
var gamePanel_scrollPosition = 0;

// 미완: 브라우저 기본 크기에서는 문제 없으나 브라우저의 크기가 작아질수록 스크롤 길이 차이로 아래 조건의 기준이 의도대로 설정되지 않음
$("#gamePanel_MoveLeft").click(function() {
    if (gamePanel_scrollPosition > 440) {
        gamePanel_scrollPosition = 440;
    }
    gamePanel_scrollPosition -= 160;
    $("div#gamePanel_flexBox").stop().animate({ scrollLeft: gamePanel_scrollPosition }, 250);
});

$("#gamePanel_MoveRight").click(function() {
    if (gamePanel_scrollPosition < 0) {
        gamePanel_scrollPosition = 0;
    }
    gamePanel_scrollPosition += 160;
    $("#gamePanel_flexBox").stop().animate({ scrollLeft: gamePanel_scrollPosition }, 250);
});
// PC: 버튼 클릭에 따른 gamePanel_flexBox의 scrollLeft 값 조정: 끝

// PC: gamePanel_flexBox의 scrollLeft 값에 따라 버튼 노출 활성화: 시작
var gamePanel_width = $("#gamePanel_flexBox").width();
// $("#valueCheck").html("gamePanel_width: " + gamePanel_width);

$(window).resize(function(){
    gamePanel_width = $("#gamePanel_flexBox").width();

    // value Check
    // $("#valueCheck").html("gamePanel_width: " + gamePanel_width);
})

$("#gamePanel_flexBox").scroll(function() {

    // 임시!
    // gamePanel_scrollPosition = $("#gamePanel_flexBox").scrollLeft();
    // 임시!

    // #gamePanel_flexBox의 width() 값을 A 변수에 대입해놓고
    // 브라우저가 resize될 때마다 그 값을 갱신하도록 하며
    // 아래 코드의 기준에 A 변수를 그대로 기준점으로 두거나 A의 10% 밑, 위를 기준을 둘 수 있게 하자

    // $("#valueCheck").html("gamePanel_scrollPosition: " + gamePanel_scrollPosition);
    return;

    if (gamePanel_scrollPosition < 50) {
        $("#gamePanel_MoveLeft").css({ "display": "none" });
    } else {
        $("#gamePanel_MoveLeft").css({ "display": "block" });
    }
    
    if (gamePanel_scrollPosition > 500) {
        $("#gamePanel_MoveRight").css({ "display": "none" });
    } else {
        $("#gamePanel_MoveRight").css({ "display": "block" });
    }
});
// PC: gamePanel_flexBox의 scrollLeft 값에 따라 버튼 노출 활성화: 끝

// PC: gamePanel_flexContent를 탭으로 포커스 할 시 효과 : 시작
$(".gamePanel_flexContent").mouseover(function() {
    $(this).addClass("active2");
});

$(".gamePanel_flexContent").mouseleave(function() {
    $(this).removeClass("active2");
});

$(".gamePanel_flexContent a").focus(function() {
    $(this).parents(".gamePanel_flexContent").addClass("active2");
});

$(".gamePanel_flexContent a").blur(function() {
    $(this).parents(".gamePanel_flexContent").removeClass("active2");
});
// PC: gamePanel_flexContent를 탭으로 포커스 할 시 효과 : 끝

// PC: employment 이미지 슬라이더(1920): 시작
var emp_imgNow = 0;
var emp_imgCnt = 4;
// 제공 이미지 5장

setInterval("fnEmpSlider()", 5000);

function fnEmpSlider() {
    emp_imgNow == emp_imgCnt ? emp_imgNow = 0 : emp_imgNow++;

    // 모든 컨텐츠를 Out 명령하고 지정 컨텐츠만 In 명령
    $("div#employment div.empImg").stop().fadeOut(2000);
    $("div#employment div.empImg").eq(emp_imgNow).stop().fadeIn(2000);

    // background-color match
    if (emp_imgNow == 0) {
        $("#employment").css({ "transition": "all 1s", "background-color": "#220e05" }, 1000);
    } else if (emp_imgNow == 1) {
        $("#employment").css({ "transition": "all 1s", "background-color": "#2f1704" }, 1000);
    } else if (emp_imgNow == 2) {
        $("#employment").css({ "transition": "all 1s", "background-color": "#140a03" }, 1000);
    } else if (emp_imgNow == 3) {
        $("#employment").css({ "transition": "all 1s", "background-color": "#1d160e" }, 1000);
    } else {
        $("#employment").css({ "transition": "all 1s", "background-color": "#1b170f" }, 1000);
    }
}
// PC: employment 이미지 슬라이더: 끝
