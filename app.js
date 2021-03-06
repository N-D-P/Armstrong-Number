const process = require('process');
//const isArmStrongNumber= require('armstrongnumber');
//there is laready a package for Armstrong Number in npmjs.com,
//but it was only test 3 digit number so it was use less for me to use that.


function power(x, y)    //Function to calculate power of x raise to y
{
  if (y != 0)
      return (x * power(x, y - 1));
  else
      return 1;
}


function digits(x)    //Function to calculate digits of number
{
    let n = 0;
    while (x != 0)
    {
        n++;
        x = parseInt(x / 10, 10);
    }
    return n;
}


function Armstrong(x)     //Function to calculate if a given number is Armstong or not
{
  let n = digits(x);
  let temp = x, sum = 0;
  while (temp != 0)
  {
      let r = temp % 10;
      sum = sum + power(r, n);
      temp = parseInt(temp / 10, 10);
  }

  return (sum == x);
}

//Driver Function

var start = new Date().getTime(); // Variable to store current time

let arguments = process.argv;  // For taking input from command line
let x = arguments[2];

if(x<=0){
  console.log("Please enter a valid number");
  return;
}
let flag = Armstrong(x);

if (flag){     // if the given number is Armstong ->

  console.log('The given number is Armstrong');   //Display that

  var end = new Date().getTime();                //Variable to store time after execution
  var time = end - start;                        //Difference between start and end
  console.log('Execution time: ' + time+' milliseconds');   //Display Execution time


  const used = process.memoryUsage().heapUsed / 1024 / 1024;               //calculate memory (I Reffered Google for this)
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
}
else        //if the given number is not Armstong
{
    // look for other Armstong number that is immediate greater than that
  for(let i = x+1; i <= Number.MAX_SAFE_INTEGER; i++)
  {

      flag = Armstrong(i);
      if(flag)
      {
        console.log(' Armstrong number higher then  '+x+' is : '+i);
        break;
      }
  }

    // look for other Armstong number that is immediate smaller than that
  for(let j = x-1;j >=1; j--)
  {

    flag = Armstrong(j);
    if(flag)
    {
      console.log(' Armstrong number higher then  '+x+' is : '+j);
      break;
    }
  }
  //to calculate end time
  var end = new Date().getTime();
  var time = end - start;
  console.log('Execution time: ' + time+' milliseconds');

  const used = process.memoryUsage().heapUsed / 1024 / 1024;               //calculate memory (I Reffered Google for this)
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
}
