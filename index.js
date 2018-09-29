// 吧code写到code和style标签里
function writeCode(prefix, code, fn){
    let domcode=document.querySelector('#code')
    domcode.innerHTML = prefix || ''
    let n= 0;
    let id = setInterval(()=>{
        n +=1
        domcode.innerHTML= Prism.highlight(prefix+code.substring(0,n),Prism.languages.css)
        styleTag.innerHTML = prefix+code.substring(0,n)
        domcode.scrollTop = domcode.scrollHeight
        if(n>= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    },10)
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n= 0;
    let id = setInterval(()=>{
        n +=1
        domPaper.innerHTML= markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if(n>= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    },10)



}

var result =` 
/*面试官你好,我是XXX
*我将以动画的形式来介绍我自己
*只用文字介绍太无聊了
*我就用代码来介绍
*首先准备了一些样式
*/
*{
    transition: all 1s;
}
html{
    color:rgb(222,222,222);
    background-color:rgb(0,43,54);
    font-size:16px;
}
#code{
    border:1px solid white;
    padding:16px;
}
/*我需要加一点的高亮*/

.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:DD4A86;
}

/*加点3D效果*/

html{
    perspective:1000px;

}

/*不玩了我来介绍下我自己吧*/
/*我们需要一张白纸*/
#code{
    top:16px;
    position:fixed;
    left:7vw;
    width:42vw;
    transtion:.5;
    height:90vh;
    transform:rotateY(10deg) translateZ(-100px);
}
#paper{
    top:15px;
    transtion:.5;
    transform:rotateY(-10deg) translateZ(-100px);
    position:fixed;
    right:7vw;
    width:42vw;
    display:flex;
    justify-content:center;
    align-items:center;
    color:rgb(0,43,54);
    background:white;
    }
#paper > .content{
        
       height:90vh;
        width:100%;
    }

`
var result2 = `
#paper{
    }
    `
    var md=`
    #标题一
    我叫林xx
    1995年1月出生
    xxxx学校毕业
    希望应聘前端开发岗位
    
    #技能介绍
    熟悉 javascript css

    #项目介绍
    1.轮播
    1.。简历
    3   画板

    #联系方式
    手机：1111111

    `
writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })
})



console.log(1)

function createPaper(fn){
    console.log(1)
    var paper = document.createElement('div')
    paper.id ='paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
// function fn3(preresult){
//     var n=0
//     var id= setInterval(()=>{
//     n +=1
//     code.innerHTML=preresult+result.substring(0,n)
//     code.innerHTML= Prism.highlight(code.innerHTML,Prism.languages.css)
//     styleTag.innerHTML = preresult+result.substring(0,n)
//     if(n>=result.length){
//         window.clearInterval(id)
//     }
//     },50)

// }
