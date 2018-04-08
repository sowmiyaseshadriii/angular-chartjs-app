import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myUser: UserService) { }

  ngOnInit() {
    console.log('Is User Logged?', this.myUser.getUserLoggedIn());
  }

}