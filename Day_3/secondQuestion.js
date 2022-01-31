function  queen(kingPos,position) {

    const quards =[{x:1,y:1},{x:1,y:-1},{x:-1,y:-1},{x:-1,x:1},{x:-1,y:0},{x:0,y:-1},{x:1,y:0},{x:0,y:-1}];
    let flag = false;
        for (let quad of quards){
            let posx = position.row;
            let posy = position.col;
            let num = 8;
            let flag = false;
            while(num>=0){
                posx = posx + quad.x;
                posy = posy + quad.y;
    
                if(!posx|!posy){
                    break
                }
                if (posx === kingPos.row && posy === kingPos.col){
                    return "King is in danger"
                    break;
                }
                num--;
            }
        }
        return "king is safe"
    }



function camel(kingPos,position) {
    const quards =[{x:1,y:1},{x:1,y:-1},{x:-1,y:-1},{x:-1,x:1}];

    let flag = false;

    for (let quad of quards){
        let posx = position.row;
        let posy = position.col;
        let num = 8;
        let flag = false;
        while(num>=0){
            posx = posx + quad.x;
            posy = posy + quad.y;

            if(!posx|!posy){
                break
            }
            if (posx === kingPos.row && posy === kingPos.col){
                return "King is in danger"
                break;
            }
            num--;
        }
    }

    return "king is safe"
}

function elephantt(kingPos,enemyPos) {

    if(kingPos.row === enemyPos.row || kingPos.col === enemyPos.col){
        return "King is in danger";
    }
     else{
        return 'King is safe now'
    }

}

function horse(kingPos,enemyPos) {
   
    const quards = [
        {x:-1,y:-2},{x:-2,y:-1},{x:-2,y:1},{x:-1,y:2},{x:1,y:-2},{x:2,y:-1},{x:2,y:1},{x:1,y:2}
    ];

    let posx = enemyPos.row;
    let posy = enemyPos.col;
    
    for (let quad of quards){
        const x = posx + quad.x;
        const y = posy + quad.y;
        if(x==kingPos.row && y === kingPos.col){
            return "King is in danger"
        }
    }
    return "King is safe"
}


(()=>{
    enemyPos ={
        row:3,col:2
    }

    kingPos ={
        row:2,col:2
    }

   const m =  camel(kingPos,enemyPos);
    const t = elephantt(kingPos,enemyPos);
    const g = queen(enemyPos,kingPos);
    console.log(g)
    const h = horse(kingPos,enemyPos);
    // console.log(h)

})()