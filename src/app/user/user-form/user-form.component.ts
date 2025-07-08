import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Journey } from '../models/journey.model';
import { BookingService } from '../services/booking.service'; // ✅ Correct path!
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  journey: Journey;

  constructor(
    private bookingService: BookingService,  // ✅ use lowercase here
    private route: Router
  ) { }

  ngOnInit() {
    this.journey = JSON.parse(localStorage.getItem("journey"));
    if (!this.journey) {
      this.route.navigate(['']);
    }
  }

  userForm(form: NgForm) {
    const user = {
      user_email: form.value.user_email,
      mobile: form.value.user_mobile,
      user_name: form.value.user_name
    };

    this.bookingService.seatBooking(this.journey, user);
    this.route.navigate(['/print']); // ✅ Redirect after submission
  }
}
