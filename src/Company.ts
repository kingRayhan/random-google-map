import faker from 'faker'
import { Mappable } from './AppMap'

export class Company implements Mappable {
	companyName: string
	catchPhrase: string
	location: { lat: number; lng: number }

	public markerContent(): string {
		return `Company name: ${this.companyName}</br>catchPhrase :${this.catchPhrase}`
	}

	constructor() {
		this.companyName = faker.company.companyName()
		this.catchPhrase = faker.company.catchPhrase()
		this.location = {
			lat: +faker.address.latitude(),
			lng: +faker.address.longitude()
		}
	}
}
