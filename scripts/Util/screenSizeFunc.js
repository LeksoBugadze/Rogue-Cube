function spriteSizeChanger(screenSize){
    console.log(screenSize);
    if(screenSize<=541){
        return 40;
    }else if(screenSize<=1800){
        return 64;
    }else return 128;
}

export {spriteSizeChanger};