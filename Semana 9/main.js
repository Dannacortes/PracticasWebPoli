//Ejercicio 1 ??
function multiplicar( n1, n2, n3, n4) {
   
    var total = n1 * n2;
    //total = n1 * n3;
    //total = n1 * n4;

    console.log("El resultado de la multiplicacion es: " + total)
}
multiplicar (2,3)

//Ejercicio 2
function media (nu1, nu2, nu3, nu4){
    var mitad = (nu1 + nu2 + nu3 + nu4) / 2
    console.log("El resultado de la media es: "+ mitad)
}
//Ejercicio 3
function ticket(num){
    var total = num * 2.1
    console.log('Presio sin IVA:', num, 'IVA: 2.1', 'Total:', total)
}
//Ejercicio 4
function calculador(p1,p2,p3,p4)
p1 = Boolean

// TALLER

function Administracion(a,mt,t,na){
    na = prompt ('Digite el numero de su residencia', '');

    mt = prompt ('Digite los metros cuadrados que tiene su residencia', '');
    
    t = prompt ('Por favor digite apartamento si usted reside en un apartamento o csa si usted reside en una casa', '');

    if(t == "apartamento")  {
        na = prompt ('Digite el numero de su residencia', '');
        a = (mt * 1500) + 50000;
    }
    if(t == "csa"){
        na = prompt ('Digite el numero de su residencia', '');
        a = (mt * 1500) + 100000;    
}

function Aseo(ca){
    ca = a * 0.1;
    ca = ca + (mt * 1000)
}

function Gimnasio(genero,edad,tygym){
    ggym = prompt ('Digite 1 si es hombre y 2 si es mujer', '')
    
    if(genero == 1){
        edad = prompt ('Porfavor digite la edad de la persona que utiliza el Gimnasio ', '')

        if(edad < 10){
            tgym = 0;
        }
        if(edad >= 10 && edad < 20){
            tgym = 20000;
        }
        if(edad >= 20 && edad < 40){
            tgym = 15000;

        }
        if(edad >= 40 && edad < 60){
            tgym = 10000;

        }
        if(edad > 60){
            tgym = 0;
        }
    }
    if(genero == 2){
        edad = prompt ('Porfavor digite la edad de la persona que utiliza el Gimnasio ', '')

        if(edad < 10){
            tgym = 0;

        }
        if(edad >= 10 && edad < 18){
            tgym = 15000;
        }
        if(edad >= 18 && edad < 35){
            tgym = 12000;

        }
        if(edad >= 35 && edad < 55){
            tgym = 8000;

        }
        if(edad > 55){
            tgym = 0;
        }
    }
    var total = a + ca + tgym;
   
}
document.getElementById("adm").innerHTML = document.getElementById("adm").innerHTML+ "" + a;
document.getElementById("aseo1").innerHTML = document.getElementById("aseo1").innerHTML + "" + ca;
document.getElementById("gym1").innerHTML = document.getElementById("gym1").innerHTML +  "" + tgym;
