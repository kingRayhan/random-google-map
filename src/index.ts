import { User } from './User'
import { Company } from './Company'
import { AppMap } from './AppMap'

let user: User = new User()
let company: Company = new Company()

let map: AppMap = new AppMap()

map.addMarker(user)
map.addMarker(company)
