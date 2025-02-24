let x=4;
let y=5;
console.log(x-y);

function add (a,b)
{

    this.a=a;
    this.b=b;
    console.log(`The sum of ${a}and ${b} is ${a+b}`);


}


add(3,4);

function mul(x,y)
{
this.x=x;
this.y=y;
console.log(`The product of ${x}and ${y} is ${x*y}`);
}
mul(7,5);


function parent()
{
    let x =500000;
    function child1()
    {
        let y=30;
        console.log(x);
    }
    function child2()
    {
        let z=60;
        console.log(z);
    }
 child1();
//  child2();
}

parent();


// closure 

function counter ()
{
    let count = 0;
    function incrementer()
    {

        count++
        console.log(count);
    }
return incrementer;
} 
let newValue = counter();

newValue();
newValue();
newValue();
newValue();
newValue();


let greet = function()
{
    return("Bibek is a computer science student ")
}
function newGreet(greet)
{
    console.log(`${great} currently  lerning  training on javascript `)
}
newGreet(greet());



class student

{

   
constructor( name, semester, address)
{
 this.name = name;
 this.semester=semester;
 this.address =address;
}

}


const Bibek = new student();
Bibek.name =  "Bibek Joshi ";
Bibek.semester = "sixth";
Bibek.address = "katan";



const people = {
    name : 'Bibek Joshi ',
    age : 20,
    city : "Mahendranagar "
    
};
const { name, age,city} =people;
console.log(name,age,city);



// spread operator

let array1 =[1,2,3];
let array2 =[...array1];

console.log(array2);

