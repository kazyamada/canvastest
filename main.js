(function(){
	var canvas = document.getElementById("canvastest");
	if(!canvas || !canvas.getContext){
		return false;
	}
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(120,20);
    ctx.lineTo(120,120);
    ctx.lineTo(20,120);
    ctx.closePath();
    ctx.stroke();
    
    var obj = new A();
    obj.setA("test");
    //alert(obj.getA());
})();

function A(){
    var a;
    this.getA = function(){
        return a;
    };
    this.setA = function(val){
        a = val;
    };
}