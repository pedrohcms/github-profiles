import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { SharedUserService } from "src/app/services/shared-user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  username: string;

  constructor(
    private userService: UserService,
    private sharedUser: SharedUserService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  getUser() {
    this.userService.findUser(this.username).subscribe((user) => {
      this.sharedUser.user = user;
      return this.route.navigate([`dashboard/${this.username}`]);
    });
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.getUser();
    }
  }
}
