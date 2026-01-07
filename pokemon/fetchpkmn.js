var pkmn = []

async function fetch_pkmn() {
    try {
        const response = await fetch("./pkmn.json")
        if (!response.ok) {
            const error = new Error(`Error msg: ${response.error}`)
            throw error
        }

    
        data = await response.json()
        
        return data.pkmn        
        
    }
    catch(e){
        console.log(e)
    }
    
}

fetch_pkmn().then(data => {pkmn = data; console.log(data);})


console.log(pkmn)