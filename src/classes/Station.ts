export class Station {

    private _nom: string
    private _longitude: number
    private _latitude: number

    constructor(nom: string, longitude: number, latitude: number) {
        this._nom = nom
        this._latitude = latitude
        this._longitude = longitude
    }


    getNom(): string {
        return this._nom
    }
    setNom(nom: string): void {
        this._nom = nom
    }

    getLongitude(): number {
        return this._longitude
    }
    setLongitude(longitude: number): void {
        this._longitude = longitude
    }

    getLatitude(): number {
        return this._latitude
    }
    setLatitude(latitude: number) {
        this._latitude = latitude
    }

    setPosition(latitude: number, longitude: number): void {
        this.setLatitude(latitude)
        this.setLongitude(longitude)
    }

}