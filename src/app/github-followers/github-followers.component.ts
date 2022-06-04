import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe((data) => {
          this.followers = <any>data;
      })
  }

}
