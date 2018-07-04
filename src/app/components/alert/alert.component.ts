import { Component, OnInit } from "@angular/core";
import { AlertService } from "../../services/service.index";
import { Subscription } from "rxjs";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {
    // subscribe to alert messages
    this.subscription = alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  ngOnInit() {}

  hideAlert() {
    this.message = "";
  }

  ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }
    
}
