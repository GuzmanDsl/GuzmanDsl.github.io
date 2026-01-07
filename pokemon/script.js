class Pokemon {
    constructor(id, name, type, moves, hp, weak, strong, img) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.moves = moves;
        this.hp = hp;
        this.weak = weak
        this.strong = strong
        this.img = img
    }

    attack(move, target) {
        console.log(`${this.name} has attacked ${target.name}`)
        let dmg = move.dmg

        if (target.weak.includes(move.type)) {
            console.log(`Weak to ${move.type}`)
            dmg *= 1.8
        } else if (target.strong.includes(move.type)) {
            console.log(`Strong to ${move.type}`)
            dmg *= 0.7
        }

        target.receive_dmg(dmg)
    }


    receive_dmg(dmg) {
        console.log(`${this.name} received ${dmg}`)
        if (dmg >= this.hp) {
            this.hp = 0
            console.log('Target has fainted')
        } else {
            this.hp -= dmg
        }
    }

    render_pkmn() {
        console.log('rendering pokemon')
        // Pokemon card
        this.element = document.createElement('div')
        this.element.className = 'pk-card'

        // Pokemon Title
        this.title = document.createElement('h4')
        this.title.id = 'pk-title'
        this.title.textContent = this.name

        // Pokemon Pic
        this.picture = document.createElement('img')
        this.picture.id = 'pic'
        this.picture.src = this.img

        // Moves grid
        this.move_grid = document.createElement('div')
        this.move_grid.id = 'move_grid'

        // Iterating through move list
        
        for(let i = 0; i <= this.moves.length -1; i++){
            console.log('hi')
            console.log(this.moves[i])
            
            let x = document.createElement('div')
            x.id = 'move'
            x.textContent = `${this.moves[i].name}`
            this.move_grid.appendChild(x)

        }

        
        



        // Appending components to card
        
        this.element.appendChild(this.title)
        this.element.appendChild(this.picture)
        this.element.appendChild(this.move_grid)
        document.getElementById('pk-holder').appendChild(this.element)
    }
}


class Move {
    constructor(name, dmg, type, pp) {
        this.name = name;
        this.dmg = dmg;
        this.type = type;
        this.pp = pp;
    }

    use() {
        this.pp -= 3;
        return this.dmg;
    }
}

tndr_shck = new Move('Thunder Shock', 30, 'Electric', 10)
tack = new Move('Tackle', 10, 'Normal', 20)
wtr_gn = new Move('Water Gun', 25, 'Water', 15)


pikachu = new Pokemon(1, 'Pikachu', "Electric", [tack, tndr_shck], 23, ["Ground", "Rock"], ["Water", "Grass", "Fly"], 'https://wallpapercave.com/wp/wp1877515.jpg')
squirtle = new Pokemon(2, 'Squirtle', 'Water', [tack, wtr_gn], 30, ["Electric", "Grass"],
    ["Fire", "Rock", "Ground", "Ice"], 'https://blogs-images.forbes.com/davidthier/files/2018/07/Squirtle_Squad.png'
)


console.log(pikachu.hp)

squirtle.attack(squirtle.moves[1], pikachu)
pikachu.attack(pikachu.moves[1], squirtle)

pikachu.render_pkmn()

console.log('Pikachu\'s hp:')
console.log(pikachu.hp)


