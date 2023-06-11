function dars(zareib,id){
    var point=document.getElementById(id).value;
    point=(point*zareib)
    return point
}
function doit()
{
    const point_m=[];
    const point_x=[];
    point_m.push(dars(1,"graphic-m"));
    point_x.push(dars(1,"graphic-x"));
    point_m.push(dars(2,"andishe-m"));
    point_x.push(dars(2,"andishe-x"));
    point_m.push(dars(2,"mobile-m"));
    point_x.push(dars(2,"mobile-x"));
    point_m.push(dars(2,"payegah-m"));
    point_x.push(dars(2,"payegah-x"));
    point_m.push(dars(2,"tej-m"));
    point_x.push(dars(2,"tej-x"));
    point_m.push(dars(1,"body-m"));
    point_x.push(dars(1,"body-x"));
    point_m.push(dars(2,"fani-m"));
    point_x.push(dars(2,"fani-x"));
    point_m.push(dars(3,"data-m"));
    point_x.push(dars(3,"data-x"));
    point_m.push(dars(2,"web-m"));
    point_x.push(dars(2,"web-x"));
    point_m.push(dars(1,"shabake-m"));
    point_x.push(dars(1,"shabake-x"));
    var sum1=0
    var sum2=0
    for (var i in point_m) {
        sum1 += point_m[i];
      }
      for (var i in point_x) {
        sum2 += point_x[i];
      }
    var result1=sum1/18;
    var result2=sum2/18;
    var result1=result1.toFixed(2);
    var result2=result2.toFixed(2);
    document.getElementById("result1").innerHTML=result1;
    document.getElementById("result2").innerHTML=result2;
}