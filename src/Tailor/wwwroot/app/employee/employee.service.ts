import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Employee} from "./employee";


/**
 * people service
 */
@Injectable()
export class EmployeeService {
    employees: Employee[] = [];
    //   person: Person = null;

    constructor(private _http: Http) { }

    getEmployees() {
        //return an observable
        let request = this._http.get('/api/Employee');
        return request
            .map((response) => {
                return response.json();
            }).map((employees: Array<any>) => {
                let result: Array<Employee> = [];

                if (employees) {
                    employees.forEach((p) => {
                        result.push(p)
                    });
                }
                return result;
            });
    }

    getEmployee(id: number) {
        return this._http.get('/api/Employee/' + id.toString())
            .map((response) => {
                return response.json();
            }).
            map((employee: Employee) => { return employee; });
    }

    updateEmployee(employee: Employee) {
        var postHeaders = new Headers();
        postHeaders.append('Content-Type', 'application/json');

        return this._http.put('/api/Employee/' + employee.Id.toString(), JSON.stringify(employee), { headers: postHeaders });
    }

    createEmployee(employee: Employee) {
        var postHeaders = new Headers();
        postHeaders.append('Content-Type', 'application/json');
        return this._http.post('api/Employee/', JSON.stringify(employee, Object.keys(employee.constructor.prototype)), { headers: postHeaders });
    }
    deleteEmployee(employeeId: number) {

        return this._http.delete('/api/Employee/' + employeeId.toString());
    }

    //private _fetchFailed(error: any) {
    //    console.error(error);
    //    return Promise.reject(error);
    //}
}
