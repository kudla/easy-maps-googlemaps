import {EasyMap} from 'easy-maps';

export class EasyMapGooglemapsEngine extends EasyMap {
    static engineName = 'googlemaps';
    constructor(propsIgnored, google) {
        super(...arguments);
        this.google = google;
    }
    mount(target) {
        let {google} = this;
        let center = {lat: 51.505, lng: -0.09};
        this.map = new google.maps.Map(target, {
            zoom: 13,
            center
        });

    }
}
