function github(){
    var request=new XMLHttpRequest();
    var url='https://github.com/manojreddy312/awtlab';
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response);
        document.querySelector("input").value=result[0].name;
        var ele="";
        for(var i=0;i<result.length;i++){
        ele+=(result[i].name)+" ";
        }
        document.write(ele);
    }
    
    request.send();
}