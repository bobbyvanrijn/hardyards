export function formatPlantName(plant) {
    if (plant === undefined) {
        return null;
    }

    const parts = [ plant.genus, plant.species, plant.cultivar ];

    const filteredParts = parts.filter((part) => {
        return part !== null && part !== undefined;
    });

    const plantName = filteredParts.join(' ');

    return plantName;
}