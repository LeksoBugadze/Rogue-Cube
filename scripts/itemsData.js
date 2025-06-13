import { player } from "./hashMaps.js"

export const itemArr=[
    {
        id:1,
        img:'/assets/Art/sword.png',
        name:'Sword I',
        description:'Increases might by 10',
        func:()=>player.increaseMight(10),   
       
    },
    {
        id:2,
        img:'/assets/Art/boots.png',
        name:'Boots I',
        description:'Increases stamina by 5',
        func:()=>player.increaseStamina(5),
        
    },
    {
        id:3,
        img:'/assets/Art/chestPlate.png',
        name:'Chest Plate I',
        description:'Increases life by 20',
        func:()=>player.increaseHealth(50),    
        
    },
    {
        id:4,
        img:'/assets/Art/shield.png',
        name:'Shield I',
        description:'Regenerates 2% health per turn',
        func:()=>player.changeRegen(2),    
       
    },{
        id:5,
        img:'/assets/Art/sword-rare.png',
        name:'Sword II',
        description:'Increases might by 20',
        func:()=>player.increaseMight(20),   
       
    },
    {
        id:6,
        img:'/assets/Art/chestPlate-rare.png',
        name:'Chest Plate II',
        description:'Increases life by 50',
        func:()=>player.increaseHealth(50),    
        
    },
    {
        id:7,
        img:'/assets/Art/boots-rare.png',
        name:'Boots II',
        description:'Increases stamina by 10',
        func:()=>player.increaseStamina(10),
        
    },
    {
        id:8,
        img:'/assets/Art/shield-rare.png',
        name:'Shield II',
        description:'Regenerates 5% health per turn',
        func:()=>player.changeRegen(5),    
       
    },
    {
        id:9,
        img:'/assets/Art/sword-mythic.png',
        name:'Sword III',
        description:'Increases might by 30',
        func:()=>player.increaseMight(30),   
       
    },
    {
        id:10,
        img:'/assets/Art/chestPlate-mythic.png',
        name:'Chest Plate III',
        description:'Increases life by 80',
        func:()=>player.increaseHealth(80),    
        
    },
    {
        id:11,
        img:'/assets/Art/boots-mythic.png',
        name:'Boots III',
        description:'Increases stamina by 20',
        func:()=>player.increaseStamina(20),
        
    },
    {
        id:12,
        img:'/assets/Art/shield-mythic.png',
        name:'Shield III',
        description:'Regenerates 10% health per turn',
        func:()=>player.changeRegen(10),    
       
    },
]