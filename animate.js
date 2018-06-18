/**
 * Created by HUCC on 2018/4/26.
 */

/**
 * 让任意元素运动到任意的位置
 * @param element 元素
 * @param target 目标值
 * @param num    每次运动的距离
 */
function animate(element, target, num) {
  clearInterval(element.timeId);
  element.timeId = setInterval(function () {
    //获取元素当前的位置
    var current = element.offsetLeft;
    //定义元素每次跑的距离
    var step = current < target ? num : -num;

    //什么时候才跑
    //如果当前位置和与目标位置的距离小于了step，可以清除定时器,否则就跑
    if (Math.abs(current - target) < Math.abs(step)) {
      clearInterval(element.timeId);
      //最终需要把element的位置设置到target
      element.style.left = target + "px";
    } else {
      current += step;
      element.style.left = current + "px";
    }
  }, 15);
}