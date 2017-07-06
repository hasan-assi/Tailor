import {Employee} from "../employee/Index";

export class EmployeeTimeSheet {
    constructor(public Id: number,
                public employee: Employee,
                public date: Date,
                public hours: number,
                public hourRate: number,
                public wage: number,
                public checked?: boolean) {
    }
}
