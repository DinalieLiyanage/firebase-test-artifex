import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-firebase-upload',
  templateUrl: './firebase-upload.component.html',
  styleUrls: ['./firebase-upload.component.scss']
})
export class FirebaseUploadComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  files : File[]=[];
  urls: string[];
  eve: EventTarget

  onSelectFile(event) {

    console.log("event : " + JSON.stringify(event.target.files[0]))
    this.files = [];
    this.urls = [];

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      this.eve = event.target.files;
      console.log("event : " + JSON.stringify(event.target.files[0]))
      for (let i = 0; i < filesAmount; i++) {

        var reader: any,
          target: EventTarget;
        reader = new FileReader();
        this.files.push(event.target.files.item(i));
        console.log("event : " + JSON.stringify(event.target.files[0]))
        reader.onload = (event) => {

          this.urls.push(event.target.result);
         
        }

        reader.readAsDataURL(event.target.files[i]);

      }
    }


  }

  uploadToFIrebase(){
      this.firebaseService.uploadAnyImageToFirebase(this.files,"firebaseSampleTest").then(
        (res: string[])=>{
          console.log("firebase upload success"+JSON.stringify(res))
        },err=>{
          console.log("error in uploading to the firebase")
        }
      )
  }

}
