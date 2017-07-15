import GoogleLoader from 'google-maps';

const OPTION_NAMES = ['key', 'language', 'region'];

export function loadGooglemapsAPI(options = {}) {
    return new Promise((resolve) => {
        for(let option of OPTION_NAMES) {
            GoogleLoader[option.toUpperCase()] = options[option];
        }
        GoogleLoader.load(resolve);
    });
}
