export class calendar {
    constructor(public id: string, public name: string, public description: string, public url: string, public children: calendar[]) { }
}
