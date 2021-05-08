// https://github.com/mekaiser/assignment-js

        // A function to convert kilometer to meter

function kilometerToMeter(kilometer){
    if(kilometer >= 0){
        let meter = kilometer * 1000;
        return meter;
    }
    else{
        return "Incorrect input";
    }
}

//-----------------------------------------------------

    // A function to find total price of watch, phone and laptop based on the quantity

const watch = 50;
const phone = 100;
const laptop = 500;
    
function budgetCalculator(WatchPiece, phonePiece, laptopPiece){
    if(WatchPiece >= 0 && phonePiece >= 0 && laptopPiece >= 0){
        let watchTotalPrice = 50 * WatchPiece;
        let phoneTotalPrice = 100 * phonePiece;
        let laptopTotalPrice = 500 * laptopPiece;
    
        let totalPrice = watchTotalPrice + phoneTotalPrice + laptopTotalPrice;
        return totalPrice;
    }
    else{
        return "Incorrect input";
    }
        
}

//-----------------------------------------------------

    // A function for calculating total hotel expenses based on how long a person stays in a hotel, where hotel charges vary based on the number of days a person stays.

function hotelCost(day){
    if(day >= 0){
        if(day <= 10){
            let totalCost = day * 100;
            return totalCost;
        }
        else if(day <= 20){
            let firstTenDaysCost = 10 * 100;
            let remainingDays = day - 10;
            let remainingDaysCost = remainingDays * 80;
            let totalCost = firstTenDaysCost + remainingDaysCost;
            return totalCost;
        }
        else{
            let firstTenDaysCost = 10 * 100;
            let secondTenDaysCost = 10 * 80;
            let remainingDays = day - 20;
            let remainingDaysCost = remainingDays * 50;
            let totalCost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
            return totalCost;
        }
    }
    else{
        return "Incorrect input";
    }
}

//-----------------------------------------------------
    
    // A function to find the biggest name from an array

function megaFriend(friendNameArray){
    var checkArray = 0; // initial value for array validation check
    for(var j = 0; j < friendNameArray.length; j++){ // array element validation checking loop for numbers or black element
        if(friendNameArray[j] == " " || friendNameArray[j] >= 0 ||friendNameArray[j] < 0){
            checkArray = -1; // array is invalid
            console.log("Invalid array");
        }
    }

    if(checkArray != -1){ // proceed if array is valid 
        var element = friendNameArray[0]; // storing the value of the first element of the given array

        for(var i = 1; i < friendNameArray.length; i++){
            if(friendNameArray[i].length > element.length){
                 element = friendNameArray[i]; // updating with bigger element
             }
        }
        return element;
    }
}