import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { SharedUserService } from "src/app/services/shared-user.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpErrorResponse } from "@angular/common/http";

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
    private route: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  getUser() {
    this.userService
      .findUser(this.username)
      .toPromise()
      .then((user) => {
        this.sharedUser.user = user;
        return this.route.navigate([`dashboard/${this.username}`]);
      })
      .catch((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.handleError(`User ${this.username} not found`);
        } else if (error.status === 0) {
          this.handleError("Check internet connection");
        }
      });
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      this.getUser();
    }
  }

  handleError(message: string): void {
    this.snackbar.open(message, "OK", {
      duration: 3000,
    });
  }
}
