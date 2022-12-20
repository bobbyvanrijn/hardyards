export default function getPageName(path) {
    let name = 'foo';

    console.log(path, new RegExp('^/plants').test(path));

    switch (true) {
        case /^\/$/.test(path):
            name = 'Index';
            break;
        case /^\/plants/.test(path):
            if (/^\/plants$/.test(path)) {
                name = 'Plants'
                break;
            }
            name = 'Plant';
            break;
        case /^\/calendar/.test(path):
            name = 'Calendar'
            break;
    }

    return name;
}
