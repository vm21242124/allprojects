// const data=[
    
//         {fname:"vinod",age:34},
//         {fname:"harshal",age:23},
//         {fname:"ajay",age:33}
//     ];
// function f(x){
//   return x.age<30;
// }
// const ages=data.filter(f).map(x=>x.age);
// const fnames = data.map((x)=>x.fname);
// console.log(ages);
// console.log(fnames);

// const d= data.reduce((acc,curr) => {
//   if(curr.age<30){
//     acc.push(curr);
//   }
//   return acc;
// },[])

// console.log(d);

// var i=10;
// console.log(i)

// const radius=[2,43,5,65,43];

// function area(radius){
//   return Math.PI * radius * radius;
// };
// function diameter(radius){
//     return 2 * Math.PI * radius;
// };

// function calculate(radius,fn){
//   return radius.map(fn);
// };

// const areaArr=calculate(radius,area);
// const diameterArr=calculate(radius,diameter);
// console.log(diameterArr);

// function x(){
//     let i=23;
//     function y(){
//         function z(){
//             console.log(i);
//         }
//         return z;
//     }
//     return y;
// }

// const d=x();
// const e=d();
// e();

// function checkPalindromNo(palindrome){
//     const p=""+palindrome;
//     const len=p.length;
//     let start=0;
//     let end=len-1;
//     while(start<=end){
//         if(p[start] !== p[end]){
//             return false;
//         }
//         start++;
//         end --;
//     }
//     return true;
// }
// console.log(checkPalindromNo("212"));

function reverseWord(str){
    let rev="";
    for(let i=0;i<str.length;i++){
        rev=str[i]+rev;
    }
    return rev;
}
function splitword(str){
    const words=[];
    let rev="";
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            words.push(rev);
            rev="";
        }else{
            rev+=str[i];
        }
    }
   if(rev){
    words.push(rev);
   }
   return words;
}
function strRev(str){
     const splitedWords = splitword(str);
     
     let rev="";
     for(let i=0;i<splitedWords.length;i++){
        rev+=reverseWord(splitedWords[i])+" ";
     }
    return rev;
}

function revString(str){
    let result="";
    let rev="";
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            result+=rev;
            result+=" ";
            rev="";
        }else{
            rev=str[i]+ rev;
        }
    }
    if(rev){
        result+=rev;
    }
    return result;
}

function bublesort(number){
    for(let i=0;i<number.length;i++){
        for(let j=i;j<number.length;j++){
            if(number[i] <= number[j]){
                let temp=number[i];
                number[i]=number[j];
                number[j]=temp;
            }
        }
    }
    return number;
}
let n=[23,4,2,57,1,3];
console.log(bublesort("vinodrmali"));
// console.log(revString("MY NAME IS AJAY"));
