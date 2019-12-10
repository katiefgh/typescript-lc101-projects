import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass (items: Payload[]): number {
        let sumTotal: number = 0;
        for (let item in items) {
            sumTotal += items[item].massKg;
        }
        return sumTotal;
    }
    currentMassKg (): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd (item: Payload): boolean {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }
    addCargo (cargo: Cargo) {
        if (this.canAdd) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut) {
        if (this.canAdd) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}