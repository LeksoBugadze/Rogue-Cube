import {Player} from"../scripts/characters/player.js"

const player=new Player();

const mapInc=new Map();
const mapDec=new Map();
const mapGet=new Map();
const mapCreateHtml=new Map();


mapInc.set('might', () => player.increaseMight());
mapInc.set('endur', () => player.increaseEndur());
mapInc.set('const', () => player.increaseConst());

mapDec.set('might', () => player.decreaseMight());
mapDec.set('endur', () => player.decreaseEndur());
mapDec.set('const', () => player.decreaseConst());

mapGet.set('might', () => player.getMight());
mapGet.set('endur', () => player.getEndur());
mapGet.set('const', () => player.getConst());

mapCreateHtml.set('might','Might');
mapCreateHtml.set('endur','Endurance');
mapCreateHtml.set('const','Constitution');

export {mapInc,mapDec,mapGet,mapCreateHtml,player};