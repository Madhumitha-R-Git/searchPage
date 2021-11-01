import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { Employee } from 'src/employee';
import { SearchserviceService } from '../searchservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchtext1=''
 searched_location=''
 selected_location=''
 selec_location=''
 selectedlocationOptions='Filter by location'
 selectedtitleOptions='Filter by title'
 searched_title=''
 selectedCertificateOptions='Filter by certification'
 searched_certificate=''
 searchdisplayvisibility='hidden'
 result_count=50
 listOfLocation:string[] =['Chennai, India','Coimbatore, India','New York, NY 10119','London W1S 1JK, UK']
 listOfJobTitle:string[] = ['Senior software engineer','Senior cloud engineer','Technical architect','Solution architect','UI/UX designer']
 listOfCertification:string[]=['AWS solution architect associate','AWS solution architect professional','Harshicorp certification','Google UX certification','AWS cloud developer associate']
 suggestedKeyWords:string[]=['Technical architect','cloud engineer']
 totalRecords:number=0
 page:number=1
 employee:Employee[]=[];
 resultperpageCount=20;
 chummatesting="John"
 
 textsearchOn()
 {
  this.searchdisplayvisibility='visible'
 }
 textsearchOff()
 {
  this.searchtext1=''
  this.searchdisplayvisibility='hidden'
 }

 constructor(
  public searchservice:SearchserviceService) {  
}

  ngOnInit(): void {
    this.searchservice.getdata().subscribe((res)=>
  {
    this.employee=res
    this.totalRecords=this.employee.length
    console.log(this.employee)
    
  })
  }

}
