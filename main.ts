

var line;
console.log("请输入行数");
//从键盘中给line赋值 //Process.argv[2];
Tree.function(line:number);


class Tree{
        
    function(line:number):void {

    var space = " ";
    var spacefin;
    var star = "*";
    var starfin;
    var linefin;

    for(var i=1;i<=line;i++) {

       spacefin = "";   //初始化空格数
       starfin = "";    //初始化星号数
       linefin = "";

       for(var j=0;j<=(line-(i-1));j++) {

           spacefin = spacefin +space;

       }
       
       for(var k=0;k<(i*2-1);k++) {

           starfin = starfin + star;

       }

       linefin = spacefin + starfin;
       console.log(linefin);
    }
    }
}



