var columnsSearching = document.getElementsByClassName("searchingColumn");
var columnsSearching = Array.prototype.slice.call(columnsSearching);
randomizeSearching();
var myIntervalVar;

function highlight(){
    if (this.style.backgroundColor == "rgb(0, 5, 40)"){ 
      this.style.backgroundColor = "#d48208";
      this.style.color = "#f0f0f0";
    }
  }
  
  function unhighlight(){
    if (this.style.backgroundColor == "rgb(212, 130, 8)"){ 
      this.style.backgroundColor = "#000528";
      this.style.color = "#f0f0f0";
    }
  }


  function compare(element1, element2){
    height1 = element1.style.height;
    height1 = height1.substring(0, height1.length-1);
    height1 = parseInt(height1);
    height2 = element2.style.height;
    height2 = height2.substring(0, height2.length-1);
    height2 = parseInt(height2);
    if (height1>height2){
        return false;
    }else{
        return true;
    }
}

function swap(element1, element2){
    height1 = element1.style.height;
    height2 = element2.style.height;
    element1.style.height = height2;
    element2.style.height = height1;
}



//  Bubble Sorting Functions



function bubbleSort(speed){
  bubbleSortTimingFunction(0,99,speed);
}


function bubbleSortTimingFunction(start, end, milli){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    singlePassBubbleTimingFunction(0,99,4);
    // put code or function call here

    increment++;
  }
}



function singlePassBubbleTimingFunction(start, end, milli){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    if (!(compare(columns[increment], columns[increment+1]))){
      swap(columns[increment], columns[increment+1]);   
    }
    // put code or function call here

    increment++;
  }
}



function randomizeSearching() {
    for (i = 0; i < columnsSearching.length; i++){
      columnsSearching[i].style.height = String(Math.floor(Math.random() * 90)+10) + "%";
      columnsSearching[i].addEventListener("mouseenter", highlight);
      columnsSearching[i].addEventListener("mouseleave", unhighlight);
      columnsSearching[i].addEventListener("click", searchSelect);
      columnsSearching[i].style.backgroundColor = "#000528";
    }
    clearTimeout(myIntervalVar);
    searchKey = columnsSearching[0];
    
}

var searchingTabs = document.getElementsByClassName("searchingTab");
var randomTabSearching = searchingTabs[0];
var speedTabSearching = searchingTabs[1];
var linearTab = searchingTabs[2];
var binaryTab = searchingTabs[3];
var sortTab = searchingTabs[4];

randomTabSearching.addEventListener("click", randomizeSearching);
randomTabSearching.addEventListener("mouseenter", highlight);
randomTabSearching.addEventListener("mouseleave", unhighlight);
linearTab.addEventListener("click", function(){linearTimingFunction(0,100);});
linearTab.addEventListener("mouseenter", highlight);
linearTab.addEventListener("mouseleave", unhighlight);
binaryTab.addEventListener("click", binarySearch);
binaryTab.addEventListener("mouseenter", highlight);
binaryTab.addEventListener("mouseleave", unhighlight);
sortTab.addEventListener("click", function(){Sort(20)});
sortTab.addEventListener("mouseenter", highlight);
sortTab.addEventListener("mouseleave", unhighlight);


function binarySearch(){
  if (!checkForSorted()){
    alert("Binary search needs a sorted list! Press the sort button on the right :)");
  }else{
    window.sortedBinaryArray = [];
    sortedBinaryArray[0] = [];
    sortedBinaryArray[1] = [];
    binarySearchRecurs(columnsSearching);
    binaryTimingFunction(0, sortedBinaryArray[0].length, 1000);
  }
}

function checkForSorted(){
  for (var walk = 0; walk<99;walk++){
    if (!compare(columnsSearching[walk], columnsSearching[walk+1])){
      return false;
    }
  }
  return true;
}

function binaryTimingFunction(start, end, milli){

  var increment = start;

  var myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    animateBinary(increment);
    // put code or function call here

    increment++;
  }
}


function animateBinary(increment){
  highlight.call(sortedBinaryArray[0][increment]);
  if (increment>0){sortedBinaryArray[0][increment-1].style.backgroundColor = "#f0f0f0"}
  console.log(sortedBinaryArray[1][increment]);
  var index = columnsSearching.indexOf(sortedBinaryArray[0][increment]);
  console.log(index);
  if (sortedBinaryArray[1][increment]==1){
    for (var remaining = index + 1; remaining<100;remaining++){
      console.log(columnsSearching[remaining]);
      columnsSearching[remaining].style.backgroundColor = "#f0f0f0";
    }
  }else if(sortedBinaryArray[1][increment]==2){
    for (var remaining = index - 1; remaining>=0;remaining=remaining-1){
      columnsSearching[remaining].style.backgroundColor = "#f0f0f0";
    }
  }else{
    for (var remaining = 0; remaining<100;remaining++){
      columnsSearching[remaining].style.backgroundColor = "#f0f0f0";
    }
  }
  searchKey.style.backgroundColor = "#d48208";
}


function binarySearchRecurs(columnArray){
  var midPoint = Math.floor(columnArray.length/2);
  var midColumn = columnArray[midPoint];
  sortedBinaryArray[0].push(midColumn);
  if(midColumn==searchKey){
    sortedBinaryArray[1].push(3);
  } 
  else{
    if (compare(midColumn, searchKey)){
      sortedBinaryArray[1].push(2);
      binarySearchRecurs(columnArray.slice(midPoint, columnArray.length));
    }else{
      sortedBinaryArray[1].push(1);
      binarySearchRecurs(columnArray.slice(0,midPoint));
    }
  }
}/*

function linearTimingFunction(start, end, milli){

    var increment = start;
  
    myIntervalVar = setInterval(myRepeatingFunction, milli);
    setTimeout(clearFunction, (end-start)*milli);
    
    function clearFunction(){
      clearTimeout(myIntervalVar);
    }
    
    function myRepeatingFunction(){
  
      // put code or function call here
      highlight.call(columnsSearching[increment]);
      if (increment>0){
          unhighlight.call(columnsSearching[increment-1]);
      }
      if (increment == columnsSearching.indexOf(searchKey)){
          for (var remaining = increment + 1; remaining<99; remaining++){
                columnsSearching[remaining].style.backgroundColor = "#000527";
            }
        }
      // put code or function call here
  
      increment++;
    }
  }
*/

function linearTimingFunction(start, milli){

  var increment = start;
  var end = columnsSearching.indexOf(searchKey) + 1;

  myIntervalVar = setInterval(myRepeatingFunction, milli);
  setTimeout(clearFunction, (end-start)*milli);
  
  function clearFunction(){
    clearTimeout(myIntervalVar);
  }
  
  function myRepeatingFunction(){

    // put code or function call here
    highlight.call(columnsSearching[increment]);
    if (increment>0){
        unhighlight.call(columnsSearching[increment-1]);
    }
    // put code or function call here

    increment++;
  }
}




function searchSelect(){
    for (var increment = 0; increment<99; increment++){
        columnsSearching[increment].style.backgroundColor = "#000528";
    }
    this.style.backgroundColor = "#d48209";
    searchKey = this;
    clearTimeout(myIntervalVar);

}


function Sort(speed){
    SortTimingFunction(0,99,speed);
  }

  
function SortTimingFunction(start, end, milli){

var increment = start;

var myIntervalVar = setInterval(myRepeatingFunction, milli);
setTimeout(clearFunction, (end-start)*milli);

function clearFunction(){
    clearTimeout(myIntervalVar);
}

function myRepeatingFunction(){

    // put code or function call here
    singlePassTimingFunction(0,99,4);
    // put code or function call here

    increment++;
}
}
  
  
  
function singlePassTimingFunction(start, end, milli){

var increment = start;

var myIntervalVar = setInterval(myRepeatingFunction, milli);
setTimeout(clearFunction, (end-start)*milli);

function clearFunction(){
    clearTimeout(myIntervalVar);
}

function myRepeatingFunction(){

    // put code or function call here
    if (!(compare(columnsSearching[increment], columnsSearching[increment+1]))){
    swap(columnsSearching[increment], columnsSearching[increment+1]);   
    }
    // put code or function call here

    increment++;
}
}
  