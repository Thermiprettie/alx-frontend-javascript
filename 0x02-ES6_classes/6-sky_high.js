import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqdt, floors) {
    super(sqdt);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    // Return a string
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // get the attributes of the class
  get sqft() { // use to get sqft attribute
    return this._sqft;
  }

  get floors() { // Getter for floors attribute (number)
    return this._floors;
  }
}