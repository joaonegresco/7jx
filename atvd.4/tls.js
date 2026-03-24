const vr = 
[

    { p: 'Macan', cash: 150000 },
    { p: 'Masseratti', cash: 800000 },
    { p: 'M5', cash: 150000 },
    { p: 'M2', cash: 900000 },
    { p: 'C250', cash: 800000 },
    { p: 'RS6', cash: 300000 }

];


const pu = new Set

(

    vr.map(item => item.p)

);


const mp = new Map

(

);

vr.forEach(item => 

{

    mp.set(item.p, item.cash);

}
);


let t = 0;

for (const item of vr) 
    
{

    t += item.cash;

}


console.log([...pu]); 


console.log(mp);


console.log(t);
