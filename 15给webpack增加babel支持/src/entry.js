document.getElementById('title').innerHTML='Hello Webpack';
import  css from './css/index.css';
import  less from './css/black.less';
import  scss from './css/blue.scss';


console.log("成功了89999！");

const PI=3.14,
      k={
        a:1
      };
k.b=3;
console.log(PI,k);

function test(x, y='world') {
    console.log('默认值',x, y);
}
test();//undefined world