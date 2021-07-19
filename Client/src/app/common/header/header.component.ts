import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.sidenav-toggler').on('click', function(){
      $(this).toggleClass('collapsed');
      $('.sidenav-collapse .sidenav').toggleClass('sidenav-collapsed');
      $('body').toggleClass('layout-sidebar-collapsed');
      if($(this).hasClass('collapsed')){
        $(this).attr('title', 'Expand sidenav')
      }else{
        $(this).attr('title', 'Collapse sidenav')
      }
    });

  }

  searchToggle(){
    document.getElementById('searchA').classList.toggle('active')
  }
}
