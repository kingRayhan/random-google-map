export interface Mappable {
	location: {
		lat: number
		lng: number
	}
	markerContent(): string

	color?: string
}

export class AppMap {
	private googleMap: google.maps.Map

	constructor() {
		this.googleMap = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 0,
				lng: 0
			},
			zoom: 5
		})
	}

	addMarker(mapbale: Mappable): void {
		let marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mapbale.location.lat,
				lng: mapbale.location.lng
			}
		})

		let infoWindow = new google.maps.InfoWindow({
			content: mapbale.markerContent()
		})

		marker.addListener('click', () => {
			infoWindow.open(this.googleMap, marker)
		})
	}
}
