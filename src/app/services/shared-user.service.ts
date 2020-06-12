import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedUserService {
  private _user = new BehaviorSubject<User>({
    name: "",
    company: "",
    bio: "",
    email: "",
    login: "",
    avatar_url: "",
    html_url: "",
    public_repos: 0,
    public_gists: 0,
    created_at: "",
  });

  constructor() {}

  get user(): User {
    return this._user.value;
  }

  set user(user: User) {
    this._user.next(user);
  }
}
