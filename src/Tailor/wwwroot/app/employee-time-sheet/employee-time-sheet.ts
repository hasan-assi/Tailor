import {Employee} from "../employee/Index";

export class EmployeeTimeSheet {
    constructor(public Id: number,
        public Employee: Employee,
        public Date: Date,
        public Hours: number,
        public HourRate: number,
        public Wage: number,
        public Checked?:boolean) { 

    }
}