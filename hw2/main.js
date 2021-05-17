let maxCoffeTankAmount = 314; //в граммах
let maxWaterTankAmount = 1000; //в мл 
let currentCoffeTankAmount = 0;
let currentWaterTankAmount = 0;

let currentCoffeTankAmountText = document.getElementById('currentCoffeTankAmount');
let currentWaterTankAmountText = document.getElementById('currentWaterTankAmount');


function fillWaterTank() {
    currentWaterTankAmount = maxWaterTankAmount;
    currentWaterTankAmountText.innerText = currentWaterTankAmount;
    test1(currentWaterTankAmount);
}

function fillCoffeTank() {
    currentCoffeTankAmount = maxCoffeTankAmount;
    currentCoffeTankAmountText.innerText = currentCoffeTankAmount;
}
function make(ml, g){
    if(currentWaterTankAmount < ml ){
        alert(`Необходимо ` + ml + ' мл воды!\nТекущее количество: ' + currentWaterTankAmount);
        return;
    }
    if(currentCoffeTankAmount < g){
        alert(`Необходимо ` + g + ' грамм кофе!\nТекущее количество: ' + currentCoffeTankAmount);
        return;
    }

    currentCoffeTankAmount -= g;
    currentCoffeTankAmountText.innerText = currentCoffeTankAmount;
    currentWaterTankAmount -= ml;
    currentWaterTankAmountText.innerText = currentWaterTankAmount;
    test1(currentWaterTankAmount);

}

// function test2() {
//     var canvas  = document.getElementById("waterCanvas");
//     if (canvas.getContext) {   
//     var context1 = canvas.getContext("2d");
//     context1.rect(50, 50, 200, 100); 
//     context1.fillStyle = "white";
//     context1.fill();
    
//  } 
// }
//  test2();


// function test1(test) {
//     test2();
//     let shirina = test * 0.2;
//     var tesst = document.getElementById("waterCanvas");
//     var context = tesst.getContext("2d");
//     //context.rect(50, 50, shirina, 100); 
//     //context.fillStyle = "blue";
//     //context.fill();
//     context.clearRect(50, 50, shirina, 100);

//     //context.stroke();  
    

// }
// //test1(500);