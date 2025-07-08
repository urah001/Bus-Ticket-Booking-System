// src/app/services/booking.service.ts
//import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export class BookingService {
  private ticketData = new BehaviorSubject<any>(null);
  cast = this.ticketData.asObservable();

  seatBooking(journey, user) {
    const ticket = {
      journey: journey,
      user: user
    };
    this.ticketData.next(ticket);  // store ticket info
  }
}
