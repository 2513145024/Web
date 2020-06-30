window.addEventListener('load', function () {
    //1.实现鼠标移入   按钮显示隐藏
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');

    var foucsWidth = focus.offsetWidth; //图片的宽度
    //显示
    focus.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;//清除定时器变量
    })
    //  消失
    focus.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function(){
            //手动调用点击事件
            arrow_r.click();
    
    
        },2000)
    });


    //  2.利用for循环 动态生成小圆圈  圆圈等于图片数
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    // console.log(ul.children.length);         图片
    for (var i = 0; i < ul.children.length; i++) {
        //创建li  
        var li = document.createElement('li');
        // 纪录当前小圆点的索引号  通过自定义属性来做
        li.setAttribute('index', i);
        // 然后把li 插入到ol
        ol.appendChild(li);

        // 小圆圈需要  排他思想  点击添加circle-i    其余的都移除circle-i
        li.addEventListener('click', function () {
            //清除所有 
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'circle-i';

            // 点击小圆圈，移动ul   ul移动距离 小圆圈索引号 X 图片的宽度 负值
            // 当我们点击某个li  就拿到当前索引号  
            var index = this.getAttribute('index');

            //当我们点击某个li   把索引号给num
            //当我们点击某个li   把索引号给circle

            num = index;
            circle = index;

            animate(ul, - index * foucsWidth);

        })


    }
    // 把第一个li  添加类名 'circle-i'
    ol.children[0].className = 'circle-i';

    // 3.克隆第一个li  放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);




    // 4.点击按钮  图片滚动一张
    var num = 0;
    // circle控制小圆点的播放
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if(flag){
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, - num * foucsWidth,function () { 
                flag = true;
             });
            circle++;
            //如果circle == 4  则到最后图片了
            if (circle == ol.children.length) {
                circle = 0;
            }
            //点击右侧按钮  小圆圈一起变化
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'circle-i';
            circleChange()
        }
        
    })

    arrow_l.addEventListener('click', function () {
        if(flag){
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
    
                ul.style.left = - num * foucsWidth + 'px';
            }
            num--;
            animate(ul, - num * foucsWidth,function(){

                flag = true;

            });
            circle--;
            //如果circle < 0  说明第一张图片
            // if(circle <0 ){
            //     circle = ol.children.length-1;
            // }
    
            circle = circle < 0 ? ol.children.length - 1 : circle;
            //点击右侧按钮  小圆圈一起变化
            circleChange()
        }
       
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'circle-i';
    }



    // 5.自动轮播
    var timer = setInterval(function(){
        //手动调用点击事件
        arrow_r.click();


    },2000)



})


