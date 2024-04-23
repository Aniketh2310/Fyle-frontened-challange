import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title:string = 'fyle-frontend-challenge'
  userName:string='';
  errorMessage:string ='Post not available'
  data:any=[]
  loading:boolean = true
  error:boolean  = false

  constructor(private apiService:ApiService) {}
  

  ngOnInit(){
    this.getUserData()
  }

  getUserName(username: any){
    this.userName = username.username
    this.getUserData()
  }
  
  
  getUserData() {
    if (!this.userName) {
      this.error = true;
      this.errorMessage = "";
      return;
    }
  
    this.error = false;
    this.loading = true;
  
    this.apiService.getUser(this.userName).subscribe(
      (res) => {   
        this.data = res;
        this.loading = false;
      },
      (err) => {
        this.error = true;
        this.errorMessage = "Post not available";
        this.loading = false;
      }
    );
  }

  
  
  
}
