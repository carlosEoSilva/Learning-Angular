import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { console.clear(); }

  contactMethods=[
    {id: 1, name: "Phone"},
    {id: 2, name: "Email"},
    {id: 3, name: "Fax"}
  ];

  log(x:any){
    console.log(x);
  }

  submit(fm:any, fmg:any){
    console.log(fm.value);
    console.log(fm.value.firstName);
    console.log(fm.value.comment);

    console.log(fmg.value);
  }

}
