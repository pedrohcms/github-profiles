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
