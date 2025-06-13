import { aStar } from "../aStar.js";

export class Enemy{
    #health;
    #currentHealth;
    #damage;
    #x;
    #y;
    #type;
    charged=false;

    constructor(enemy){
        this.#type=enemy.type;
        this.#x=enemy.x;
        this.#y=enemy.y;
        this.#health=enemy.health;
        this.#damage=enemy.damage;
        this.#currentHealth=this.#health;
    }

    takeDamage(damage){
        this.#currentHealth-=damage;
        const enemyHealth=document.querySelector('.enemy-heath-container');
        enemyHealth.innerHTML=`${this.#currentHealth}/${this.#health}`;
        return this.#currentHealth;
    }

   

    moveToPlayer(playerX, playerY, grid) {
        const start = { x: this.#x, y: this.#y };
        const end = { x: playerX, y: playerY };

        const path = aStar(start, end, grid);

        if (path.length > 0) {
            const next = path[0];
            grid[this.#x][this.#y] = 'empty';
            this.#x = next.x;
            this.#y = next.y;
            grid[this.#x][this.#y] = 'enemy';
        }

        return { x: this.#x, y: this.#y };
    }

    getSprite(){
        const sprite=document.querySelector(`[data-row="${this.#x}"][data-column="${this.#y}"]`).querySelector('.enemy');
        return sprite;
    }

    getHealth() {
        return this.#health; 
    }
    
    getCurrentHealth(){
        return this.#currentHealth;
    }
    
    getDamage(){
        return this.#damage;
    }
    

    getType(){
        return this.#type;
    }
    getX(){return this.#x;}
    getY(){return this.#y;}
}