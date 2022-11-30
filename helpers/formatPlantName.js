export function formatPlantName(plant) {
    const parts = [ plant.genus, plant.species, plant.cultivar ];

    const filteredParts = parts.filter((part) => {
        return part !== null && part !== undefined;
    });

    const plantName = filteredParts.join(' ');

    return plantName;
}