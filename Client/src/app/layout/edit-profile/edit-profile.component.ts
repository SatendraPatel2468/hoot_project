import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var iEdit:any;
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#logo-file").change(function(e){
      var img = e.target.files[0];
      if(!iEdit.open(img, true, function(res){
      $("#result").attr("src", res);      
      })){
        alert("Whoops! That is not an image!");
      }
    });

  }

}
