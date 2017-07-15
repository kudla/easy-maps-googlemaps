import {loadGooglemapsAPI} from './load-googlemaps-api';
import {EasyMapGooglemapsEngine} from './easy-map-googlemaps-engine';

export function EasyMapGooglemaps(options) {
    return loadGooglemapsAPI(options)
        .then(google => {
            class EasyMapGooglemaps extends EasyMapGooglemapsEngine {
                constructor(props) {
                    super(props, google);
                }
            }
            return EasyMapGooglemaps;
        });
}
