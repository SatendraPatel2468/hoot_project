import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // For Driver Page
  //  setTimeout(function(){

  //    if ( $('.dashboardPage').length ) {
  //      $('.sidenav-item').removeClass("active");
  //      $('.dashboardPageNav').addClass("active");
  //     }
  //     if ( $('.subadminPage').length ) {
  //       $('.sidenav-item').removeClass("active");
  //       $('.subadminPageNav').addClass("active");
  //     }
  //     if( $('.reportsPage').length ) {
  //       $('.sidenav-item').removeClass("active");
  //       $('.reportsPageNav').addClass("active");
  //     }
      
  //     if( $('.settingsPage').length ) {
  //       $('.sidenav-item').removeClass("active");
  //       $('.settingsPageNav').addClass("active");
  //     }
  //   },500);

    $('.sidenav-collapse .sidenav li a').click(function(){
      if($('body').hasClass('layout-sidebar-collapsed')){
        $('.sidenav-collapse .sidenav').addClass('sidenav-collapsed');
      }else{
        $('.sidenav-collapse .sidenav').removeClass('sidenav-collapsed');
      }
    });

  // $('.has-subnav > a').on('click', function(){
  //   $(this).parent('li').toggleClass('open');
  //   $(this).next('ul').toggleClass('collapse');
  //   $(this).next('ul').slideToggle('');
  // });
  // $('.sidenav-toggler').on('click', function(){
  //   $('body').toggleClass('layout-sidebar-collapsed');
  //   $('.sidenav-collapse').toggleClass('sidenav-collapsed');
  // $('.sidenav-collapse').toggleClass('collapse');
  //  });

  //  $('.has-subnav > a').click(function(){
  //   if($('body').hasClass('layout-sidebar-collapsed')){
  //     $(this).closest('.has-subnav').toggleClass('active');
  //     $(this).next('ul').slideToggle('');
  //   }else{
  //     $(this).click('disabled', true);
  //   }
  // });
  }

}
