import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/employee';

@Injectable({
  providedIn: 'root'
})

export class SearchserviceService {

  constructor(private httpclient:HttpClient) { }
  public getdata()
  {
    return this.httpclient.get<Employee[]>('./data/employeedetails.json')
  }
}
