import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Repo } from "../models/Repo";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RepoService {
  constructor(private http: HttpClient) {}

  findRepos(username: string): Observable<Repo> {
    return this.http.get<Repo>(
      `${environment.baseUrl}/users/${username}/repos`
    );
  }
}
