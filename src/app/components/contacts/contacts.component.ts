import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  mailForm :FormGroup;
  sent: Boolean = false;
  constructor(private service: ContactService,formBuilder : FormBuilder) {
    this.mailForm = formBuilder.group({
      name : [''],
      email: [''],
      message: ['']
    })
  }

  ngOnInit(): void {}
  send(){
    this.service.send(this.mailForm.value)
    .subscribe(next => this.mailForm.reset(),error => console.log(error));
  }
}
