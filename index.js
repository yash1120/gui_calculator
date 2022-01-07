function addlog(msg){
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    msg_text_node  = document.createTextNode(msg)
    li.appendChild(msg_text_node)
    ul.appendChild(li)
}
function calculate(){
    exp = document.getElementById("expression").value;
    console.log(exp);
    try{
        ans = eval(exp);
        document.getElementById("expression").value=ans;
        addlog(exp + " = "+ ans)
    }
    catch(e){
        console.log("errror happend")
        addlog(exp + "   bad expression ")
    }
}
function math_calculate(){
    exp = document.getElementById("expression").value;
    console.log(exp);
    try{
        ans = math.evaluate(exp);
        document.getElementById("expression").value=ans;
        addlog(exp + " = "+ ans)
    }
    catch(e){
        console.log("errror happend")
        addlog(exp + "   bad expression ")
    }
}
function add_value(v){
    expression = document.getElementById("expression").value;
    expression = expression+v;
    document.getElementById("expression").value = expression;
}
function clear(){
    document.getElementById("expression").value='';
}
function back(){
    expression = document.getElementById("expression").value;
    expression = expression.substring(0, expression.length - 1);
    document.getElementById("expression").value = expression;
}