import {EasyMap} from 'easy-maps';

export function MapFactory(google) {
    class GooglemapsMap extends EasyMap {
        mount(target) {
            let center = {lat: 41.383333, lng: 2.183333};
            this.map = new google.maps.Map(target, {
                zoom: 13,
                center
            });
        }
    }
    return GooglemapsMap;
}
