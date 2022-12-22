import { plants } from 'content/plants';
import { formatPlantName } from 'helpers/formatPlantName';

function findPlantName(slug) {
    const result = plants.find(plant => {
        return plant.slug === slug;
    });

    return formatPlantName(result);
}

export default function getPageName(path) {
    let name = 'foo';

    switch (true) {
        case /^\/$/.test(path):
            name = 'Index';
            break;
        case /^\/plants/.test(path):
            if (/^\/plants$/.test(path)) {
                name = 'Plants'
                break;
            }

            const match = path.match(/[^/]+(?=\/$|$)/);
            const slug = match[0];

            name = findPlantName(slug);
            break;
        case /^\/calendar/.test(path):
            name = 'Calendar'
            break;
        case /^\/collections/.test(path):
            name = 'Collections'
            break;
        case /^\/playground/.test(path):
            name = 'Demo'
            break;
    }

    return name;
}
