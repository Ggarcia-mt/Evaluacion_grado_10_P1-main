let num1,num2,ope,r
alert('para suma(1),para restar(2),para multiplicar(3)para dividir(4)')
num1=5
ope=prompt('operacion')
num2=7
if(ope==4){
    r=num1/num2;
    alert(r);
}else 
if(ope==3){
    r=num1*num2;
    alert(r);
} else
if (ope==1) {
    r=num1+num2;
    alert(r);
}else
if (ope==2) {
    r=num1-num2;
    alert(r);
}


