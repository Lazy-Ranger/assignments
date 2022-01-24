

(()=>{
    let a = [1,2,3,4,5,6,];
    let b = [7,8,9,10,11,12,13,14,15,16,17];

    let c = [];

    for (let i = 0; i<a.length; i++){
        c.push(a[i])
    }
    for(let j = 0; j<b.length; j++){
        c.push(b[j])
    }

    const mid = parseInt(c.length/2);

    let median = null;

    if(c.length%2===0){
        // for even
        median = parseInt((c[mid]+c[mid-1])/2);
        
    }
    else{
        // for odd
        midian = c[mid]
    }

    console.log(midian)

})()