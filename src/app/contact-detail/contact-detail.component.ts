import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact:any;
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router,private location: Location) { }

  ngOnInit() {

      this.rest.getContact(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.contact = data;
    });
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}

