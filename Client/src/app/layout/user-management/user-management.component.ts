import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
declare var $:any;
export interface PeriodicElement {
  name: string;
  email: string;
  contact: number;
  address: string;
  booking: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', email: 'xyz@gmial.com', contact: 9988776655, address: 'Delhi, India', booking: '12', status: 'active'},
  {name: 'Hydrogen', email: 'xyz@gmial.com', contact: 9988776655, address: 'Delhi, India', booking: '12', status: 'active'},
  {name: 'Hydrogen', email: 'xyz@gmial.com', contact: 9988776655, address: 'Delhi, India', booking: '12', status: 'active'},
  {name: 'Hydrogen', email: 'xyz@gmial.com', contact: 9988776655, address: 'Delhi, India', booking: '12', status: 'active'},
  {name: 'Hydrogen', email: 'xyz@gmial.com', contact: 9988776655, address: 'Delhi, India', booking: '12', status: 'active'},
];
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'name', 'image', 'email', 'contact', 'address', 'booking', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;

  
  constructor() { }
  ngOnInit() {
    setTimeout(function(){
      $('#checkAll').on('click', function(){
        if($(this).is(':checked')){
          $(this).closest('.table').find('td').find('input[type=checkbox]').prop('checked', true);
        }else{
          $(this).closest('.table').find('td').find('input[type=checkbox]').prop('checked', false);
        }
      });
    }, 500);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
