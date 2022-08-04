export default function DoSomething(){

}

export const DoSomething = () => {

} 

//Anonymous Functions
<button onClick={() => {
    console.log("hello world")
}}>

</button>

//Ternary operators
if (age>18){
    name = "krish"
}else{
    name = "blue"
}

let age = 10;
let name = age > 10 && "krish";
let name1 = age > 10 || "krish";

let name3 = age > 12 ? "john" : "krish";


const Component = () => {
    return age > 10 ? <div>Pedro</div> : <div>krish</div>
}

//objects

const names = "krish";
const age2= 45;

const person1 = {
    names,
    age2,
    isMarried: False, 
};

const person = {
    names: "krish",
    age2: 4522,
    isMarried: False, 
};

const person2 = {...person, name: "jack"}

const namess = ["krish", 'jennifer', 'veritas', "pedro", "Pedro"]
const namess1 = [...namess, 'acme']
const namess2 = [...namess, 'acme']

//const name4 = person.name
//const age4 = person.age
//const married = person.isMarried

const {name4, age4, isMarried} = person;



namess.map((name) => {
    return <h1> {name} </h1>
    //return name + "1";
    //console.log(name);
})

.reduce()

namess.filter((name) => {
    return name !== "pedro"
})

//Async + Await + fetch