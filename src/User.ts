import faker from 'faker'
import { Mappable } from './AppMap'

export class User implements Mappable {
	public name: string
	public location: { lat: number; lng: number }

	public markerContent(): string {
		return `User name: ${this.name}`
	}

	constructor() {
		this.name = faker.name.findName()
		this.location = {
			lat: +faker.address.latitude(),
			lng: +faker.address.longitude()
		}
	}
}
