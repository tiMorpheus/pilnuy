import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {


  name: string;
  phone: string;
  msg: string;


  data = [];

  constructor() { }

  ngOnInit() {

  }


  submitMessage():void{

      console.log(this.name)


      alert(this.name)

  }

}
