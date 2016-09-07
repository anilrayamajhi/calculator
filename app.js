var digit = document.querySelectorAll('.digit');
var readout = document.querySelector('#readout');
var operate = document.querySelectorAll('.operator');
var equal = document.querySelector('.equal');
var ac = document.querySelector('.ac');

var input = [];
var overWrite = true;

digit.forEach(function(d) {
  d.addEventListener('click', function(){
    if(overWrite){
      readout.innerText="";
      readout.innerText += this.innerText;
      overWrite=false;
    }
    else{
      readout.innerText += this.innerText;
    }
  });
});

operate.forEach(function(o){
  o.addEventListener('click', function(){
      if(input[0] === undefined){
        input[0] = readout.innerText;
        console.log(input);
      }
    else{
      readout.innerText="";
      readout.innerText+=this.innerText;
    }
    input.push(this.getAttribute('data-op'));
    console.log(input);
    overWrite = true;
  });
});


equal.addEventListener('click', function(){
  input.push(readout.innerText);
  if(input[2] === undefined)
  {
    readout.innerText = input[0];
  }
  else
  {
  readout.innerText="";
  readout.innerText = parseFloat(operation[input[1]](input[0], input[2]).toFixed(5));
  }
  console.log(input);
  overWrite = true;
  input= [];
});

var operation = {
  add: function(a,b) {return ((+a) + (+b));},
  substract: function(a,b) {return ((+a)-(+b));},
  multiply: function(a,b) {return ((+a)*(+b));},
  divide: function(a,b) {return ((+a)/(+b));},
  percent: function(a,b) {return ((+a)/100 * (+b));},
  equal: function(a) {return (+a);},
};

ac.addEventListener('click', function(){
  readout.innerText='0';
  input=[];
});
