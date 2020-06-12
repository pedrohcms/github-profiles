import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { SharedUserService } from "src/app/services/shared-user.service";
import { RepoService } from "src/app/services/repo.service";
import { Repo } from "src/app/models/Repo";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  user: User;
  repo: Repo;
  displayedColumns = ["name", "description", "html_url", "created_at"];

  constructor(
    private sharedUser: SharedUserService,
    private repoService: RepoService
  ) {
    this.user = this.sharedUser.user;
  }

  ngOnInit(): void {
    this.repoService.findRepos(this.user.login).subscribe((repo) => {
      this.repo = repo;
    });
  }
}
