import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/employee';
import { VisitedProfile } from 'src/visitedProfile';

@Injectable({
  providedIn: 'root'
})

export class SearchserviceService {

  constructor(private httpclient:HttpClient) { }
  public getEmployeedata()
  {
    return this.httpclient.get<Employee[]>('./data/employeedetails.json')
  }
  public getrecentlyvisiteddata()
  {
    return this.httpclient.get<VisitedProfile[]>('./data/recentlyvisitedprofiles.json')
  }
}
