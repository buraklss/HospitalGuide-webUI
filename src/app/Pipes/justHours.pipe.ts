import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HoursModel } from '../model/hourdModel';
import { Observable } from 'rxjs';

@Pipe({
  name: 'justHours'
})
export class JustHoursPipe implements PipeTransform {

  constructor(private http: HttpClient) {}

  transform(url: string, options = {}): Observable<HoursModel> {
    return this.http.get<HoursModel>(url, options).pipe(

    );
}
}