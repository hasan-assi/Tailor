import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {EmployeeTimeSheet} from "./Index";
import {Observable} from 'rxjs';

/**
 * people service
 */
@Injectable()
export class EmployeeTimeSheetService {
    employeeTimeSheets:EmployeeTimeSheet[] = [];
    //   person: Person = null;

    constructor(private _http: Http) { }
    private _employeesUrl = 'http://localhost:5000/api/EmployeeTimeSheet/';

    //getEmployeesTimeSheet() {
    //    //return an observable
    //    return this._http.get(this._employeesUrl)
    //        .map(res => <EmployeeTimeSheet[]>res.json())
    //        .do(data => console.log(data))
    //        .catch(this.handleError);
    //}

    //getEmployee(id: number) {
    //    return this._http.get('/api/Employee/' + id.toString())
    //        .map((response) => {
    //            return <Employee>response.json();
    //        });
    //}


    //updateEmployee(employee: Employee) {
    //    var postHeaders = new Headers();
    //    postHeaders.append('Content-Type', 'application/json');

    //    return this._http.put(this._employeesUrl + employee.Id.toString(), JSON.stringify(employee), { headers: postHeaders })
    //        //.map(res => <Employee>res.json())
    //        //.do(data => console.log(data))
    //        .catch(this.handleError);
    //}

    private toDateString(date: Date): string {
        return (date.getFullYear().toString() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + (date.getDate())).slice(-2))
            + 'T' + date.toTimeString().slice(0, 5);
    }

    private handleError(err: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(err);
        return Observable.throw(err || 'Server error');
    }

    getEmployeesTimeSheets(date:Date) {
        //return an observable
        return this._http.get(this._employeesUrl + this.toDateString(date))
            .map(res => <EmployeeTimeSheet[]>res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    createEmployeesTimeSheets(employeesTimeSheets: EmployeeTimeSheet[], date:Date): Observable<EmployeeTimeSheet[]> {
        let body = JSON.stringify(employeesTimeSheets);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let dateFormated = this.toDateString(date);
        return this._http.post(this._employeesUrl + dateFormated, body, options)
            .map(res=> <EmployeeTimeSheet[]>res.json())
            .catch(this.handleError);
    }
    //deleteEmployee(employeeId: number) {

    //    return this._http.delete('/api/Employee/' + employeeId.toString());
    //}

}

interface Map<T> {
    [K: string]: T;
}
