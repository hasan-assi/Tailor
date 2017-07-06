
export class Employee {

    constructor(public id: number,
        public cardNo: string,
        public firstName: string,
        public lastName: string,
        public dailyWage: number,
        public hourRate: number,
        public hourPerDay: number,
        public checked?: boolean) {

    }

}
