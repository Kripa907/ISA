// Area of Triangle
function area(b,h){
    c=(b*h)/2;
    console.log(c);
    return c;
}
area(3,2);
area(7,4);
area(10,10);

// Return something to me
function givensomething(x){
    y="Something" +""+ x
    console.log(y)
    return y
}
givensomething("Is better than Nothing");
givensomething("Bob Jane");
givensomething("Something");

// Basketball Points
function points(x,y){
    z=(x*2)+(y*3)
    console.log(z)
    return z
}
points(1,1);
points(7,5);
points(38,8);

//less than 100
function lessthan100(m,n){
    o=m+n;
if (o<100){
    console.log(true);
    return true;
}
else{
    console.log(false);
    return false;
}
}
lessthan100(22,15);
lessthan100(83,77);

//add up the numbers from a single number
function addup(x){
    count=0;
    if(x<=1000){
        for(let i=1;i<=x;i++){
            count+=i;
        }
        return count;
    }
}
console.log(addup(4))
console.log(addup(13))
console.log(addup(600))

//oddish Vs. Evenish
function oddishOrEvenish(a){
    d=0;
    b=a.toString();
    for(let i=0;i<b.length;i++){
        c=parseInt(b[i]);
        d=d+c;
    }
    if(d%2==0){
        console.log("It is Evenish");
    }
    else{
        console.log("It is Oddish")
    }
}

oddishOrEvenish(121);
oddishOrEvenish(41);
oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);

//Any Prime Number in Range
function primeinrange(n1,n2){
    for (n1;n1<=2;n1++){
        if(n1<2){
            continue
        }
        let isPrime = true;
        for(let j=2;j<Math.sqrt(n1);j++){
            if(n1 % j===0){
                break;
            }
        }
        if(isPrime){
            console.log("Prime number in range: ",n1);
        }
    }
    console.log("No prime number in Range");
    return false;
}
primeinrange(10,15);
primeinrange(62,66)

//Left shift by powers of two
function shifttoleft(a,b){
    c=a*(2**b);
    console.log(c);
}
shifttoleft(5,2);
shifttoleft(10,3);
shifttoleft(-32,2);
shifttoleft(-6,5);
shifttoleft(12,4);
shifttoleft(46.6);

/*Create a function that returns a base-2 (binary) representation of a base-10 
(decimal) string number. To convert is simple: ((2) means base-2 and (10) 
means base-10) 
010101001(2) = 1 + 8 + 32 + 128.*/
function binary(a){
    res=' ';
    let c=parseInt(a);
    if (c<=1024){
        while(c>0)
        {
            let d=c%2;
            res=d.toString() +res;
            c=Math.floor(c/2);
        }
        console.log(res);
    }
}
binary(10);
binary(15);
binary(1025);