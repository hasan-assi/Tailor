import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Employee} from ".";
import {Observable}     from 'rxjs/Observable';

/**
 * people service
 */
@Injectable()
export class EmployeeService {
    employees: Employee[] = [];
    //   person: Person = null;

    constructor(private _http: Http) { }
    private baseEmployeesUrl = 'http://localhost:5000/';

    getEmployees() {
        //return an observable

        return this._http.get(this.baseEmployeesUrl + 'api/Employee/')
            .map(res => <Employee[]>res.json())
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }

    getEmployee(id: number) {
        return this._http.get(this.baseEmployeesUrl +'api/Employee/' + id.toString())
            .map((response) => {
                return <Employee>response.json();
            });
    }


    updateEmployee(employee: Employee) {
        var postHeaders = new Headers();
        postHeaders.append('Content-Type', 'application/json');

        return this._http.put(this.baseEmployeesUrl + 'api/Employee/'  + employee.id.toString(), JSON.stringify(employee), { headers: postHeaders })
            //.map(res => <Employee>res.json())
            //.do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(err: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(err);
        return Observable.throw(err || 'Server error');
    }


    createEmployee(employee: Employee): Observable<Employee>  {
        let body = JSON.stringify(employee);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.baseEmployeesUrl + 'api/employee', body, options)
            .map(res=> <Employee>res.json())
            .catch(this.handleError);
    }
    deleteEmployee(employeeId: number) {

        return this._http.delete(this.baseEmployeesUrl + 'api/Employee/' + employeeId.toString());
    }

}
