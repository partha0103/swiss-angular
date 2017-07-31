import { OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService implements OnInit{
    token: string;
    constructor(private http: HttpClient){}

    ngOnInit(){
    }

    signInUser(email: string, password: string){
        const body = {
            email: email,
            password: password
        }
        let url = "http://localhost:8000/login";
        this.http.post(url, body)
            .subscribe(
                response => {
                    this.token = response['token'];
                    console.log(this.token);
                }
            )
    }

    signUpUser(email: string, username: string, password: string){
        const body= {
            email: email,
            password: password,
            username: username
        }
        let url = "http://localhost:8000/signup";
        this.http.post(url, body)
            .subscribe(
                response => {
                    console.log(response);
                },
                error =>{
                    console.log(error);
                }
            )
    }
}
