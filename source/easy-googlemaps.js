import {loadGooglemapsAPI} from './load-googlemaps-api';
import {MapFactory} from './map';
import {ViewFactory} from './view';

export function EasyGooglemaps(options) {
    return loadGooglemapsAPI(options)
        .then(google => {
            return {
                engineName: 'Googlemaps',
                Map: MapFactory(google),
                View: ViewFactory(google)
            };
        });
}
