
var singleRoom = 25000;
var doubleRoom = 35000;
var tripleRoom = 40000;
var kid        = 5000;
var extraBed   = 8000;


var singleRoomAmount = 0.00;
var doubleRoomAmount = 0.00;
var tripleRoomAmount = 0.00;
var totalK = 0.00;

var totalDiscount = 0;



//===========================function2 Triple Rooms END===================================

function singleRoomValueChange(){
    var kidsTotal = document.getElementById('kids').value;
    var totalK = kidsTotal * kid;
    var singleRooms = document.getElementById('SingleRoom').value;
    var singleRoomSelector = document.getElementById('require1').value;
    if(singleRoomSelector == 'yes'){
        var extraBedTotal =  singleRooms * extraBed;
        var fullTotal = extraBedTotal + (singleRooms * singleRoom);
       
        
       }else if(singleRoomSelector == 'no'){
        
        var fullTotal = singleRooms * singleRoom;
        
       }
       singleRoomAmount = fullTotal + totalK;
       var tot12 = fullTotal + totalK;
       console.log(singleRoomAmount);
       document.getElementById('cost').innerHTML = "Rs. "+tot12
       
}

function doubleRoomValueChange(){
    var doubleRooms = document.getElementById('DoubleRoom').value;
    var doubleRoomSelector = document.getElementById('require2').value;
    if(doubleRoomSelector == 'yes'){
        var extraBedTotal =  doubleRooms * extraBed;
        var fullTotal = extraBedTotal + (doubleRooms * doubleRoom);
 
       }else if(doubleRoomSelector == 'no'){
        var fullTotal = doubleRooms * doubleRoom;
       }
       doubleRoomAmount = fullTotal;
        console.log(doubleRoomAmount);
        var singleHasDouble = fullTotal + singleRoomAmount;
        document.getElementById('cost').innerHTML = "Rs. "+singleHasDouble;
       
}
function tripleRoomValueChange(){
    var tripleRooms = document.getElementById('TripleRoom').value;
    var tripleRoomSelector = document.getElementById('require3').value;
    if(tripleRoomSelector == 'yes'){
        var extraBedTotal =  tripleRooms * extraBed;
        var fullTotal3 = extraBedTotal + (tripleRooms * tripleRoom);

       }else if(tripleRoomSelector == 'no'){
        var fullTotal3 = tripleRooms * tripleRoom;
       }
       tripleRoomAmount = fullTotal3;
       console.log("triple" + tripleRoomAmount);
       var singleHasDoubleHasTriple = fullTotal3 + singleRoomAmount + doubleRoomAmount;
       document.getElementById('cost').innerHTML = "Rs. "+singleHasDoubleHasTriple
}

function promoCode(){
    var singleRooms = document.getElementById('SingleRoom').value;
    var singleRoomSelector = document.getElementById('require1').value;
    var doubleRooms = document.getElementById('DoubleRoom').value;
    var doubleRoomSelector = document.getElementById('require2').value;
    var tripleRooms = document.getElementById('TripleRoom').value;
    var tripleRoomSelector = document.getElementById('require3').value;
    var kids = document.getElementById('kids').value;
   var fulltot =  document.getElementById('cost').innerHTML.split('.')[1];
   var doubleTot = parseFloat(fulltot);
   console.log(doubleTot);
   var promoCode = document.getElementById('promoCode').value;
   if(promoCode === 'Promo123'){
    totalDiscount = ((doubleTot * 5)/100);
    var amount = doubleTot - totalDiscount;
    console.log(doubleTot - totalDiscount);
    document.getElementById('cost').innerHTML = "Rs ."+amount;
    //=========================single=========================
    if(singleRoomSelector == 'yes'){
        var singleRoomTotal = ((singleRooms * singleRoom) + (singleRooms * extraBed));
        document.getElementById('detailsSingle').innerHTML = "Number of single roms : "+singleRooms+" Extra Bed : "+singleRooms+" Total : Rs. "+singleRoomTotal;
    }else{
        var singleRoomTotal = ((singleRooms * singleRoom));
        document.getElementById('detailsSingle').innerHTML = "Number of single roms : "+singleRooms+" Total : Rs. "+singleRoomTotal; 
    }
    //=========================double=====================================
    if(doubleRoomSelector == 'yes'){
        var doubleRoomTotal = ((doubleRooms * doubleRoom) + (doubleRooms * extraBed));
        document.getElementById('detailsDouble').innerHTML = "Number of double roms : "+doubleRooms+" Extra Bed : "+doubleRooms+" Total : Rs. "+doubleRoomTotal;
    }else{
        var doubleRoomTotal = ((doubleRooms * doubleRoom));
        document.getElementById('detailsDouble').innerHTML = "Number of double roms : "+doubleRooms+" Total : Rs. "+doubleRoomTotal;
    }
    //==================triple==========================
    if(tripleRoomSelector == 'yes'){
        var tripleRoomTotal = ((tripleRooms * tripleRoom) + (tripleRooms * extraBed));
        document.getElementById('detailsTriple').innerHTML = "Number of triple roms : "+tripleRooms+" Extra Bed : "+tripleRooms+" Total : Rs. "+tripleRoomTotal;
    }else{
        var tripleRoomTotal = ((tripleRooms * tripleRoom));
        document.getElementById('detailsTriple').innerHTML = "Number of triple roms : "+tripleRooms+" Total : Rs. "+tripleRoomTotal;
    }
    //=======================kids===========================
    if(kids.toString() != ''){
        var kidsTotal = ((kids * kid));
        document.getElementById('detailsKids').innerHTML = "Number of Kids : "+kids+" Total : Rs. "+kidsTotal; 
    }
    document.getElementById('discount').innerHTML = "5% discount : "+totalDiscount;
    
   }else{
    alert('Promo Code is Incerrect');
   }
}

//=====================================Adventure Reservation===================

localAdult = 5000;
localKid = 2000;
foreignAdult = 10000;
foreignKid = 5000;
guide = 1000;
kidGuide = 1000;

var tot1 = 0;
var tot2 = 0;
var tot3 = 0;
var tot4 = 0;

var total2 = 0;
var total3 = 0;
var total4 = 0;


function changeValue1(){
    var localAdults =  document.getElementById('localAdults').value;
    var localHors  =  document.getElementById('numberofHours').value;
    console.log(localHors);
    var doubleRoomSelector = document.getElementById('require4').value;
    if(doubleRoomSelector == 'yes'){

            var localAdultTot = (localAdults * localAdult) * localHors ;
            var guideCost = localAdults * guide;
                var total = localAdultTot + guideCost;
            
    }else if(doubleRoomSelector == 'no'){
        var localAdultTot = (localAdults * localAdult) *localHors ;

            var total = localAdultTot;

    }else{
        alert('Select Guide Requirement');
        document.getElementById('localAdults').value = 'Number of Local adults';
    }
    tot1 = total;
        console.log(tot1);
        document.getElementById("total").innerHTML = "Rs. "+tot1
}

function changeValue2(){
    var localAdults =  document.getElementById('localKids').value;
    var localHors  =  document.getElementById('numberofHours2').value;
    console.log(localHors);
    var doubleRoomSelector = document.getElementById('require5').value;
    if(doubleRoomSelector == 'yes'){

            var localAdultTot = (localAdults * localKid) * localHors;
            var guideCost = localAdults * kidGuide;
                var total = localAdultTot + guideCost;

    }else if(doubleRoomSelector == 'no'){
        var localAdultTot = (localAdults * localKid) * localHors ;
        
            var total = localAdultTot;
        
    }else{
        alert('Select Guide Requirement');
        document.getElementById('localAdults').value = 'Number of Local adults';
    }
    tot2 = total + tot1;
    total2 = total;
        console.log(tot2);
        document.getElementById("total").innerHTML = "Rs. "+tot2
}




//===============================jhgh =============================================


function changeValue3(){
    var foreignAdults =  document.getElementById('foreignAdults').value;
    var localHors  =  document.getElementById('numberofHours3').value;
    console.log(localHors);
    var doubleRoomSelector = document.getElementById('require6').value;
    if(doubleRoomSelector == 'yes'){

            var localAdultTot = (foreignAdults * foreignAdult) * localHors;
            var guideCost = foreignAdults * kidGuide;
            var total = localAdultTot + guideCost;
            console.log("normal "+total);

    }else if(doubleRoomSelector == 'no'){
        var localAdultTot = (foreignAdults * foreignAdult) * localHors;
        
            var total = localAdultTot;

    }else{
        alert('Select Guide Requirement');
        document.getElementById('localAdults').value = 'Numebr of Foreign adults';
    }
    tot3 = total + tot2;
    total3 = total;
        console.log(tot2);
        document.getElementById("total").innerHTML = "Rs. "+tot3

}


function changeValue4(){
    var foreignAdults =  document.getElementById('foreignKids').value;
    var localHors  =  document.getElementById('numberofHours4').value;
    console.log(localHors);
    var doubleRoomSelector = document.getElementById('require7').value;
    if(doubleRoomSelector == 'yes'){

            var localAdultTot = (foreignAdults * foreignKid) * localHors;
            var guideCost = foreignAdults * kidGuide;
                var total = localAdultTot + guideCost;

            console.log(total);
        
    }else if(doubleRoomSelector == 'no'){
        var localAdultTot = (foreignAdults * foreignKid) * localHors ;
       
            var total = localAdultTot;
        
    }else{
        alert('Select Guide Requirement');
        document.getElementById('localAdults').value = 'Numebr of Foreign adults';
    }
    tot4 = total  + tot3;
    total4 = total;
        console.log(tot2);
        document.getElementById("total").innerHTML = "Rs. "+tot4
}


function summery(){

    var singleRooms = document.getElementById('SingleRoom').value;
    var singleRoomSelector = document.getElementById('require1').value;
    var doubleRooms = document.getElementById('DoubleRoom').value;
    var doubleRoomSelector = document.getElementById('require2').value;
    var tripleRooms = document.getElementById('TripleRoom').value;
    var tripleRoomSelector = document.getElementById('require3').value;
    var kids = document.getElementById('kids').value;
    var fulltot =  document.getElementById('cost').innerHTML.split('.')[1];
    var dobleTot = parseFloat(fulltot);
   var total = ((dobleTot * 5)/100);

    var fulltot =  document.getElementById('cost').innerHTML.split('.')[1];
    document.getElementById('output1').innerHTML = fulltot;
    

    //===========================descrption===============================

    if(singleRoomSelector == 'yes'){
        var singleRoomTotal = ((singleRooms * singleRoom) + (singleRooms * extraBed));
        document.getElementById('detailsSingle2').innerHTML = "Number of single roms : "+singleRooms+" Extra Bed : "+singleRooms+" Total : Rs. "+singleRoomTotal;
    }else{
        var singleRoomTotal = ((singleRooms * singleRoom));
        document.getElementById('detailsSingle2').innerHTML = "Number of single roms : "+singleRooms+" Total : Rs. "+singleRoomTotal; 
    }
    //=========================double=====================================
    if(doubleRoomSelector == 'yes'){
        var doubleRoomTotal = ((doubleRooms * doubleRoom) + (doubleRooms * extraBed));
        document.getElementById('detailsDouble2').innerHTML = "Number of double roms : "+doubleRooms+" Extra Bed : "+doubleRooms+" Total : Rs. "+doubleRoomTotal;
    }else{
        var doubleRoomTotal = ((doubleRooms * doubleRoom));
        document.getElementById('detailsDouble2').innerHTML = "Number of double roms : "+doubleRooms+" Total : Rs. "+doubleRoomTotal;
    }
    //==================triple==========================
    if(tripleRoomSelector == 'yes'){
        var tripleRoomTotal = ((tripleRooms * tripleRoom) + (tripleRooms * extraBed));
        document.getElementById('detailsTriple2').innerHTML = "Number of triple roms : "+tripleRooms+" Extra Bed : "+tripleRooms+" Total : Rs. "+tripleRoomTotal;
    }else{
        var tripleRoomTotal = ((tripleRooms * tripleRoom));
        document.getElementById('detailsTriple2').innerHTML = "Number of triple roms : "+tripleRooms+" Total : Rs. "+tripleRoomTotal;
    }
    //=======================kids===========================
    if(kids.toString() != ''){
        var kidsTotal = ((kids * kid));
        document.getElementById('detailsKids2').innerHTML = "Number of Kids : "+kids+" Total : Rs. "+kidsTotal;
    }
    document.getElementById('discount2').innerHTML = "5% discount : "+totalDiscount;


    //=======================================adventure================================================

    var localAdults =  document.getElementById('localAdults').value;
    var localHors  =  document.getElementById('numberofHours').value;
    var doubleRoomSelector = document.getElementById('require4').value;
    if(doubleRoomSelector == 'yes'){
        var localA = (localAdults * localAdult) + (localAdults * guide);
        console.log(localA);
       
        if(localHors.toString() == '1'){
           
        }else{
            var localH = localHors * localAdult;
        }
        var localcost = localA + localH;
        console.log(localcost);
        document.getElementById('detailsSingle3').innerHTML = " local Adults : "+localAdults+" Number of hours : "+ localHors+" Guide : "+ localAdults +": Total "+tot1;
    }else if(doubleRoomSelector == 'no'){
        var localA = (localAdults * localAdult);
        if(localHors.toString() == '1'){
            
        }else{
            var localH = localHors * localAdult;
            document.getElementById('detailsSingle3').innerHTML = " local Adults : "+localAdults+" Number of hours : "+ localHors+" : Total "+tot1;
        }
        var localcost = localA + localH;
        document.getElementById('detailsSingle3').innerHTML = " local Adults : "+localAdults+" Number of hours : "+ localHors+" : Total "+tot1;
    }


    var localAdults =  document.getElementById('localKids').value;
    var localHors  =  document.getElementById('numberofHours2').value;
    var doubleRoomSelector = document.getElementById('require5').value;
    if(doubleRoomSelector == 'yes'){
        var localA = (localAdults * localAdult) + (localAdults * guide);
        console.log(localA);
       
        if(localHors.toString() == '1'){
           
        }else{
            var localH = localHors * localAdult;
        }
        var localcost = localA + localH;
        console.log(localcost);
        document.getElementById('detailsDouble3').innerHTML = " local Kid : "+localAdults+" Number of hours : "+ localHors+" Guide : "+ localAdults +": Total "+total2;
    }else if(doubleRoomSelector == 'no'){
        var localA = (localAdults * localAdult);
        if(localHors.toString() == '1'){
            
        }else{
            var localH = localHors * localAdult;
            document.getElementById('detailsDouble3').innerHTML = " local Kid : "+localAdults+" Number of hours : "+ localHors+" : Total "+total2;
        }
        var localcost = localA + localH;
        document.getElementById('detailsDouble3').innerHTML = " local Kid : "+localAdults+" Number of hours : "+ localHors+"  Total "+total2;
    }



    var localAdults =  document.getElementById('foreignAdults').value;
    var localHors  =  document.getElementById('numberofHours3').value;
    var doubleRoomSelector = document.getElementById('require6').value;
    if(doubleRoomSelector == 'yes'){
        var localA = (localAdults * localAdult) + (localAdults * guide);
        console.log(localA);
       
        if(localHors.toString() == '1'){
           
        }else{
            var localH = localHors * localAdult;
        }
        var localcost = localA + localH;
        console.log(localcost);
        document.getElementById('detailsTriple3').innerHTML = " Foreign Adults : "+localAdults+" Number of hours : "+ localHors+" Guide : "+ localAdults +": Total "+total3;
    }else if(doubleRoomSelector == 'no'){
        var localA = (localAdults * localAdult);
        if(localHors.toString() == '1'){
            
        }else{
            var localH = localHors * localAdult;
            document.getElementById('detailsTriple3').innerHTML = " Foreign Adults : "+localAdults+" Number of hours : "+ localHors+" : Total "+total3;
        }
        var localcost = localA + localH;
        document.getElementById('detailsTriple3').innerHTML = " Foreign Adults : "+localAdults+" Number of hours : "+ localHors+"  : Total "+total3;
    }




    var localAdults =  document.getElementById('foreignKids').value;
    var localHors  =  document.getElementById('numberofHours4').value;
    var doubleRoomSelector = document.getElementById('require7').value;
    if(doubleRoomSelector == 'yes'){
        var localA = (localAdults * localAdult) + (localAdults * guide);
        console.log(localA);
       
        if(localHors.toString() == '1'){
           
        }else{
            var localH = localHors * localAdult;
        }
        var localcost = localA + localH;
        console.log(localcost);
        document.getElementById('detailsKids3').innerHTML = " : Foreign kid : "+localAdults+" Number of hours : "+ localHors+" Guide : "+ localAdults +": Total "+total4;
    }else if(doubleRoomSelector == 'no'){
        var localA = (localAdults * localAdult);
        if(localHors.toString() == '1'){
            
        }else{
            var localH = localHors * localAdult;
            document.getElementById('detailsKids3').innerHTML = " Foreign kid : "+localAdults+" Number of hours : "+ localHors+" : Total "+total4;
        }
        var localcost = localA + localH;
        document.getElementById('detailsKids3').innerHTML = " Foreign kid : "+localAdults+" Number of hours : "+ localHors+" : Total "+total4;
    }
 
    var localAdults =  document.getElementById('localAdults').value;
    var localKid =  document.getElementById('localKids').value;
    var foreignAdults =  document.getElementById('foreignAdults').value;
    var foreignKid =  document.getElementById('foreignKids').value;
    if(localAdults.toString() != '' || localKid.toString() != '' || foreignAdults.toString() != '' || foreignKid.toString() != ''){
        var fulltot =  document.getElementById('cost').innerHTML.split('.')[1];
        var adventuretot =  document.getElementById('total').innerHTML.split('.')[1];
        document.getElementById('detailsSingle4').innerHTML = "  Rooms Charge : "+fulltot;
        var advTot = parseFloat(adventuretot);
        document.getElementById('detailsDouble4').innerHTML = "  Adventure Charge : "+advTot;
    
        
        
        var totamount = parseFloat(fulltot);
        
        console.log(totamount);
        var fullAmount = totamount + advTot;
        document.getElementById('output2').innerHTML = advTot;
        document.getElementById('output3').innerHTML = fullAmount;
        alert("Your Reservation has been confirmed!");
    }else{
        alert("Empty value");
    }
    


    
}

function saveBookingLater(){
    var name = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('number').value;
    var date1 = document.getElementById('date1').value;
    var date2 = document.getElementById('date2').value;
    var guests =  document.getElementById('guests').value;
    var kids =  document.getElementById('kids').value;
    var singleRoom =  document.getElementById('SingleRoom').value;
    var require1 =  document.getElementById('require1').value;
    var doubleRoom =  document.getElementById('DoubleRoom').value;
    var require2 =  document.getElementById('require2').value;
    var tripleRoom =  document.getElementById('TripleRoom').value;
    var require3 =  document.getElementById('require3').value;
    var message =  document.getElementById('message').value;
    if(name.toString() != '' && email.toString() != '' && mobileNumber.toString() != ''){
        var check;
        var check2;
        var check3;
        if(require1 === 'yes'){
            check = 'Single Room Extra Bed : '+singleRoom;
        }else if(require1 === 'no'){
            check = 'Single Room Extra Bed Empty';
        }
        if(require2 === 'yes'){
            check2 = 'Double Room Extra Bed : '+doubleRoom;
        }else if(require2 === 'no'){
            check2 = 'Double Room Extra Bed Empty';
        }
        if(require3 === 'yes'){
            check2 = 'Triple Room Extra Bed : '+tripleRoom;
        }else if(require3 === 'no'){
            check2 = 'Triple Room Extra Bed Empty';
        }
        let myObj = {
            name : name,
            email : email,
            date1: date1,
            date2 : date2,
            guest : guests,
            kid : kids,
            singleRoom : singleRoom,
            require1 : check,
            doubleRoom : doubleRoom,
            require2:check2,
            tripleRoom : tripleRoom,
            require3: check3,
            message:message,

        }
        console.clear();
        let myobj_serialized = JSON.stringify(myObj);
        localStorage.setItem("My Booking", myobj_serialized);
        console.log(localStorage);
        alert("Thank you "+name)
    }else{
        alert("Please enter valid details "+name)
    }
    
}
function saveBook(){
    var name = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('number').value;
    var date1 = document.getElementById('date1').value;
    var date2 = document.getElementById('date2').value;
    var message =  document.getElementById('message').value;
    if(name.toString() != '' && email.toString() != '' && mobileNumber.toString() != ''){
        alert("Thank you "+name)
    }else{
        alert("Please enter valid details "+name)
    }
}