interface Level {
    id: number;
    Lvl_name: string;
    Lvl_difficulty: string;
    Lvl_number: number;
}

type LevelsArray = Level[];

async function fetchLevels() {
    try {
        const response = await fetch("http://localhost:8081/LevelsModel");
        const data = await response.json() as LevelsArray;
        displayLevels(data);
    } catch (error) {
        console.error("Error fetching levels:", error);
    }
}

function displayLevels(levels: LevelsArray) {
    const container = document.getElementById('levels-container');
    if (container) {
        levels.forEach(level => {
            container.innerHTML += `
                <div class="level-card">
                    <h2>${level.Lvl_name}</h2>
                    <p>Difficulty: ${level.Lvl_difficulty}</p>
                    <p>Level Number: ${level.Lvl_number}</p>
                </div>
            `;
        });
    }
}

fetchLevels();