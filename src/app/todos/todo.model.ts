export class todo {
    constructor(
        public id: string,
        public name: string,
        public imageUrl: string,
        public group: todo[] | null,
    ) { }
}
