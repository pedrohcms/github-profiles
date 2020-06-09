import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { SharedUserService } from "src/app/services/shared-user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(private sharedUser: SharedUserService) {}

  ngOnInit(): void {
    this.user = this.sharedUser.user;
    console.log(this.user);
  }
}
