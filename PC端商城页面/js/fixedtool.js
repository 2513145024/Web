$(function(){
    //我们点击了li  此时不需要执行   滚动事件里面的li 背景选择 
    //节流阀
    //1.显示隐藏
    var flag = true;
    var toolTop = $(".recom").offset().top;
    toggleTool()

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();

        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool();

        //页面滚动某个区域  Li添加类名

        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

                }


            })
        }
    })

    //  2.点击电梯导航可以滑动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        
        var current = $(".floor .w").eq($(this).index()).offset().top;

        $("body, html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        // 点击之后让Li  添加  current 
        $(this).addClass("current").siblings().removeClass();

    })

})