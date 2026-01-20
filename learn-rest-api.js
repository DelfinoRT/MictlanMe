// Fetch Pokémon data based on user input
async function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    if (!pokemonName) {
        alert('Please enter a Pokémon name.');
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Pokémon not found!');
        }
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        document.getElementById('pokemonResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Display Pokémon data (reusable for different result divs)
function displayPokemon(data, resultDivId = 'pokemonResult') {
    const resultDiv = document.getElementById(resultDivId);
    resultDiv.innerHTML = `
        <h4>${data.name.toUpperCase()}</h4>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
    `;
}

// Fetch data from a custom endpoint
async function fetchEndpoint() {
    const endpoint = document.getElementById('endpointInput').value;
    if (!endpoint) {
        alert('Please enter an endpoint.');
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2${endpoint}`);
        if (!response.ok) {
            throw new Error('Endpoint not found!');
        }
        const data = await response.json();
        document.getElementById('endpointResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        document.getElementById('endpointResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Fetch the top 10 Pokémon
async function fetchTop10() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        if (!response.ok) {
            throw new Error('Failed to fetch Pokémon.');
        }
        const data = await response.json();
        const pokemonList = data.results.map(pokemon => pokemon.name).join(', ');
        document.getElementById('top10Result').innerHTML = `<p>${pokemonList}</p>`;
    } catch (error) {
        document.getElementById('top10Result').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Compare two Pokémon
async function comparePokemon() {
    const pokemonA = document.getElementById('pokemonA').value.toLowerCase();
    const pokemonB = document.getElementById('pokemonB').value.toLowerCase();
    if (!pokemonA || !pokemonB) {
        alert('Please enter both Pokémon names.');
        return;
    }

    try {
        const responseA = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonA}`);
        const responseB = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonB}`);
        if (!responseA.ok || !responseB.ok) {
            throw new Error('One or both Pokémon not found!');
        }
        const dataA = await responseA.json();
        const dataB = await responseB.json();
        displayComparison(dataA, dataB);
    } catch (error) {
        document.getElementById('compareResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Display comparison between two Pokémon
function displayComparison(dataA, dataB) {
    const resultDiv = document.getElementById('compareResult');
    resultDiv.innerHTML = `
        <table>
            <tr>
                <th>Attribute</th>
                <th>${dataA.name.toUpperCase()}</th>
                <th>${dataB.name.toUpperCase()}</th>
            </tr>
            <tr>
                <td>Height</td>
                <td>${dataA.height}</td>
                <td>${dataB.height}</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>${dataA.weight}</td>
                <td>${dataB.weight}</td>
            </tr>
            <tr>
                <td>Base Experience</td>
                <td>${dataA.base_experience}</td>
                <td>${dataB.base_experience}</td>
            </tr>
            <tr>
                <td>Types</td>
                <td>${dataA.types.map(type => type.type.name).join(', ')}</td>
                <td>${dataB.types.map(type => type.type.name).join(', ')}</td>
            </tr>
        </table>
    `;
}

// Fetch a random Pokémon
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    // Update the endpoint display for the user (ensure the placeholder is replaced)
    const endpointSpan = document.getElementById('randomPokemonEndpointExample');
    if (endpointSpan) {
        endpointSpan.innerHTML = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokémon.');
        }
        const data = await response.json();
        displayPokemon(data, 'randomPokemonResult');
    } catch (error) {
        document.getElementById('randomPokemonResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Fetch Pokémon by type
async function fetchType() {
    const type = document.getElementById('typeInput').value.toLowerCase();
    if (!type) {
        alert('Please enter a type.');
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        if (!response.ok) {
            throw new Error('Type not found!');
        }
        const data = await response.json();
        const pokemonList = data.pokemon.map(p => p.pokemon.name).join(', ');
        document.getElementById('typeResult').innerHTML = `<p>${pokemonList}</p>`;
    } catch (error) {
        document.getElementById('typeResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Search Pokédex
async function searchPokedex() {
    const query = document.getElementById('pokedexInput').value.toLowerCase();
    if (!query) {
        alert('Please enter a Pokémon name or ID.');
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!response.ok) {
            throw new Error('Pokémon not found!');
        }
        const data = await response.json();
        displayPokedex(data);
    } catch (error) {
        document.getElementById('pokedexResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Display Pokédex entry
function displayPokedex(data) {
    const resultDiv = document.getElementById('pokedexResult');
    resultDiv.innerHTML = `
        <h4>${data.name.toUpperCase()}</h4>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>ID: ${data.id}</p>
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
        <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <p>Base Experience: ${data.base_experience}</p>
    `;
}

// Fetch evolution chain
async function fetchEvolution() {
    const pokemonName = document.getElementById('evolutionInput').value.toLowerCase();
    if (!pokemonName) {
        alert('Please enter a Pokémon name.');
        return;
    }
    // Reset endpoints display
    document.getElementById('evoEndpoint1').textContent = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    document.getElementById('evoEndpoint2').textContent = '(species.url will appear here)';
    document.getElementById('evoEndpoint3').textContent = '(evolution_chain.url will appear here)';
    try {
        // Endpoint 1
        const endpoint1 = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const response = await fetch(endpoint1);
        if (!response.ok) throw new Error('Pokémon not found!');
        const data = await response.json();
        // Endpoint 2
        const speciesUrl = data.species.url;
        document.getElementById('evoEndpoint2').textContent = speciesUrl;
        const speciesResponse = await fetch(speciesUrl);
        if (!speciesResponse.ok) throw new Error('Species data not found!');
        const speciesData = await speciesResponse.json();
        // Endpoint 3
        const evoChainUrl = speciesData.evolution_chain.url;
        document.getElementById('evoEndpoint3').textContent = evoChainUrl;
        const evolutionResponse = await fetch(evoChainUrl);
        if (!evolutionResponse.ok) throw new Error('Evolution chain data not found!');
        const evolutionData = await evolutionResponse.json();
        displayEvolution(evolutionData);
    } catch (error) {
        document.getElementById('evolutionResult').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Display evolution chain
function displayEvolution(data) {
    const resultDiv = document.getElementById('evolutionResult');
    let evolutionChain = '';
    let current = data.chain;

    while (current) {
        evolutionChain += `${current.species.name} `;
        if (current.evolves_to && current.evolves_to.length > 0) {
            evolutionChain += `→ `;
            current = current.evolves_to[0];
        } else {
            current = null;
        }
    }

    resultDiv.innerHTML = `<p>${evolutionChain}</p>`;
}