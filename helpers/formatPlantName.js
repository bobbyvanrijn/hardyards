export function formatPlantName(plant) {
    if (plant === undefined) {
        return '';
    }

    const parts = [ plant.genus, plant.species, plant.cultivar ];

    const filteredParts = parts.filter((part) => !!part);

    const plantName = filteredParts.join(' ');

    return plantName;
}