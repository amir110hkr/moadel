function dars(zareib,id){
    var point=document.getElementById(id).value;
    point=(point*zareib)
    return point
}
function doit()
{
    const point_m=[];
    const point_x=[];
    point_m.push(dars(1,"edare-m"));
    point_x.push(dars(1,"edare-x"));
    point_m.push(dars(2,"barname-m"));
    point_x.push(dars(2,"barname-x"));
    point_m.push(dars(3,"math-m"));
    point_x.push(dars(3,"math-x"));
    point_m.push(dars(3,"farsi-m"));
    point_x.push(dars(3,"farsi-x"));
    point_m.push(dars(3,"eng-m"));
    point_x.push(dars(3,"eng-x"));
    point_m.push(dars(2,"kar-m"));
    point_x.push(dars(2,"kar-x"));
    point_m.push(dars(2,"net-m"));
    point_x.push(dars(2,"net-x"));
    point_m.push(dars(1,"mob-m"));
    point_x.push(dars(1,"mob-x"));
    var sum1=0
    var sum2=0
    for (var i in point_m) {
        sum1 += point_m[i];
      }
      for (var i in point_x) {
        sum2 += point_x[i];
      }
    var result1=sum1/17;
    var result2=sum2/17;
    var result1=result1.toFixed(2);
    var result2=result2.toFixed(2);
    document.getElementById("result1").innerHTML=result1;
    document.getElementById("result2").innerHTML=result2;
}