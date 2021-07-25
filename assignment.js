

//kilometreToMeter problem solving:
function kilometerToMeter(input){
meter =input *1000; //1 kilometre =1000 meter;
if(input<0){
return console.log("please enter a valid value");
}return meter;
}
//var meter1 =kilometerToMeter(8);
//console.log(meter1);



//budgetCalculator problem solving:
function budgetCalculator(watch,mobile,laptop){
var  watchPrice =watch*50;
var mobilePrice =mobile*100;
var laptopPrice =laptop*500;
var totalPrice =watchPrice + mobilePrice + laptopPrice;
return totalPrice;
}
//var howMuch =budgetCalculator(12,10,10);
//console.log(howMuch)



//HotelCost:
function hotelCost(input){
if(input<=10){
var cost =input *100;
var totalCost =cost;
}
else if(input<=20){
cost =10*100;
cost1 =(input -10) *80;
totalCost =cost + cost1;
}
else if(input>=21){
cost =10*100;
cost1 =10*80;
cost2 =(input -20)*50;
totalCost =cost + cost1 + cost2;
}
if(input<0){
console.log('please input the right value!');
} return totalCost;
}
//var result =hotelCost(8);
//console.log(result);



//megaFriend:
function megaFriend(friends){
var megaFriend =friends[0];
for(var i=0; i<friends.length;i++){
var element =friends[i];
if(element.length>megaFriend.length){
megaFriend =element;
}
}return megaFriend;
}
var friends =['khokon','mohon','mim','shariful','emon'];
//var result =megaFriend(friends);
//console.log(result);