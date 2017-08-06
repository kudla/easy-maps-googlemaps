import {EasyView} from 'easy-maps';
import {isEqual} from 'lodash';

export function ViewFactory(google) {
    class GooglemapsView extends EasyView {
        set rotation(valueIgnored) {
            // eslint-disable-next-line no-console
            console.warn('Googlemaps does not support map rotation');
        }
        set center({value, transition}) {
            let {map: {map}} = this;
            let {LatLng} = google.maps;
            let mapCenter = map.getCenter();
            if (!isEqual(value, [mapCenter.lng(), mapCenter.lat()])) {
                let center = new LatLng(...value.slice().reverse());
                if (transition) {
                    // eslint-disable-next-line no-console
                    console.warn('Googlemaps does not support controlled transition for center');
                    map.panTo(center);
                } else {
                    map.setCenter(center);
                }
            }
        }
        set zoom({value: zoom, transition}) {
            let {map: {map}} = this;
            if (zoom !== map.getZoom()) {
                if (transition) {
                    // eslint-disable-next-line no-console
                    console.warn('Googlemaps does not support controlled transition for zoom');
                    map.setZoom(zoom);
                } else {
                    map.setZoom(zoom);
                }
            }
        }
    }
    return GooglemapsView;
}
