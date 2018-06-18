/**
 * Created by 90380 on 2018/4/27.
 */



function  imgScoll() {
  //找对象
  var carousel = document.querySelector(".carousel");
  var ul = document.querySelector(".carousel ul");
  var imgs = ul.children;
  var ol = document.querySelector(".carousel ol");

//创建小圆点，添加到ol
  for (var i = 0; i < imgs.length; i++) {
    var li = document.createElement("li");
    ol.appendChild(li);
  }
  //设置第一个小圆点的颜色
  var points = ol.children;
  points[0].className = "now";

  //克隆第一张图片
  ul.appendChild(ul.firstElementChild.cloneNode(true));


  //右箭头注册点击事件
  var rightArr = document.querySelector(".carousel .rightArr");
  var leftArr = document.querySelector(".carousel .leftArr");

  //count是移动图片的张数
  var count = 0;
  rightArr.onclick = function () {
    if (count >= imgs.length-1) {
      count = 0;
      ul.style.left = -count * carousel.offsetWidth + "px";
    }
    count++;
    ul.style.left = -count * carousel.offsetWidth + "px";

    //同步小圆点
    for (var i = 0; i < points.length; i++) {
      points[i].className = "";
    }
    if (count >= imgs.length-1) {
      points[0].className = "now";
    } else {
      points[count].className = "now";
    }
  };

  //左箭头
  leftArr.onclick = function () {
    if (count <= 0) {
      count = imgs.length -1;
      ul.style.left = -count * carousel.offsetWidth + "px";
    }
    count--;
    ul.style.left = -count * carousel.offsetWidth + "px";
    //animate(ul,-count*carousel.offsetWidth);

    //同步小圆点
    for (var i = 0; i < points.length; i++) {
      points[i].className = "";
    }
    if (count >= imgs.length -1) {
      points[0].className = "now";
    } else {
      points[count].className = "now";
    }
  };

  //小圆点注册点击事件

  for (var i = 0; i < points.length; i++) {
    //给每一个小圆点存下标
    points[i].index = i;
    points[i].onclick = function () {
      //小圆点排它
      for (var i = 0 ; i < points.length; i++) {
        points[i].className = "";
      }
      //复活当前的小圆点
      this.className = "now";

      //判断，如果count是最后一张
      if (count >= imgs.length-1) {
        count = 0;
        ul.style.left = -count * carousel.offsetWidth + "px";
      }
      count = this.index;
      ul.style.left = -count * carousel.offsetWidth + "px";
      //animate(ul,-count*carousel.offsetWidth);
    }
  };


  //图片自动播放 ,点击右箭头，自动播放
  var duration = 1000;
  var timeId = setInterval(function () {
    rightArr.click();
  },duration);

  //给盒子注册onmouseover事件.清理定时器
  carousel.onmouseover = function () {
    clearInterval(timeId);
  }

  //给盒子注册onmouseout事件，设置定时器
  carousel.onmouseout = function () {
    timeId = setInterval(function () {
      rightArr.click();
    },duration);
  }






}



