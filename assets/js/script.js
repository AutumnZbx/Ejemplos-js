import {getRobotByid,getRobotBySeries,renderCards} from './funciones.js';
import { robots } from './robots.js';


//console.log(robots[0]);

//console.log(robots[0].id);
//console.log(robots[0].name);
//console.log(robots[0].series);

console.log(getRobotByid('013'));
console.log(getRobotBySeries(4));



renderCards(robots, 'robotsRow');


//const {id,name,series} = robots[0];
//console.log(id);
//console.log(name);
//console.log(series);

//const getRobotByid =(id="009")=>{
//    return robots.find((robot)=>{
//       return robot.id ===id;
//    });
//}


//console.log(getRobotByid("013"));

//const getRobotBySeries =(series=2)=>{
//    return robots.filter((robot)=>{
//        return robot.series===series;
//    })
//}

//console.log(getRobotBySeries("3"));

//const {id,name,series}= getRobotByid("013");
//console.log(id);
//console.log(name);
//console.log(series);