
export class Employee {
    
    constructor(public Id: number,
        public CardNo: string,
        public FirstName: string,
        public LastName: string,
        public DailyWage: number,
        public HourRate: number,
        public HourPerDay: number,
        public Checked?: boolean) {

    }

}