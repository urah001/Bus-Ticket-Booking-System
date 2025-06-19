import { Component, OnInit } from "@angular/core";
import { BookingService } from "../services/booking.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-print",
  templateUrl: "./print.component.html",
  styleUrls: ["./print.component.css"],
})
export class PrintComponent implements OnInit {
  createTicket;
  constructor(private BookingService: BookingService, private route: Router) {}

  ngOnInit() {
    this.BookingService.cast.subscribe((res) => (this.createTicket = res));
    if (!this.createTicket) {
      this.route.navigate([""]);
    }
  }

  printTicket() {
    const printContents = document.querySelector(".ticket").innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // to reload the original view
    }
  }
}
