import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";


@Injectable({
    providedIn: 'root'
})

export class FirebaseService {
   // files: File[] = [];
    imageUrls : string[] = [];
    profilePicImageUrl: string;
    videoUrls: string[]=[];
    videoImageUrl: string[]=[];
    constructor(
        private store: AngularFireStorage,
       
    ) {

    }

    uploadAlbumImagesToFirebase(files: File[]) {
        const error = false;

        return new Promise((resolve,reject) => {

            this.imageUrls =[];
            for(let i =0 ; i < files.length ; i++){

                let firstURL =files[i];
                console.log(firstURL);
                let path = `albumImages/${firstURL.name}${(new Date()).getTime()}`;
                let ref = this.store.ref(path);
                this.store.upload(path, firstURL).then(rst => {
                    rst.ref.getDownloadURL().then(url => {
                    //  console.log(url);
                      this.imageUrls.push(url);
                      if(this.imageUrls.length === files.length){
                       
                          resolve(this.imageUrls);
                      }
                    },
                    err=>{
                        console.log(JSON.stringify("error"+err));
                        reject(err)
                    });
                  });
            }


        });
    }


    // uploadVideosToFirebase(files: File[]) {
    //     console.log("Inside firebase video")
    //     const error = false;

    //     return new Promise((resolve,reject) => {
    //         console.log("Inside promise")
    //         this.videoUrls =[];
    //         for(let i =0 ; i < files.length ; i++){
    //             console.log("file length : "+files.length)
    //             let firstURL =files[i];
    //             console.log(firstURL);
    //             let path = `videos/${firstURL.name}${(new Date()).getTime()}`;
    //             let ref = this.store.ref(path);
    //             this.store.upload(path, firstURL).then(rst => {
    //                 rst.ref.getDownloadURL().then(url => {
    //                 //  console.log(url);
    //                   this.videoUrls.push(url);
    //                   if(this.videoUrls.length === files.length){
                       
    //                       resolve(this.videoUrls);
    //                   }
    //                 },
    //                 err=>{
    //                     console.log(JSON.stringify("firebase uploading error"+err));
    //                     reject(err)
    //                 });
    //               });
    //         }


    //     });

    //     }


    uploadImagesToFirebase(files: File[]) {
        
        const error = false;

        return new Promise((resolve,reject) => {

            this.imageUrls =[];
            for(let i =0 ; i < files.length ; i++){

                let firstURL =files[i];
                console.log(firstURL);
                let path = `posts/${firstURL.name}${(new Date()).getTime()}`;
                let ref = this.store.ref(path);
                this.store.upload(path, firstURL).then(rst => {
                    rst.ref.getDownloadURL().then(url => {
                    //  console.log(url);
                      this.imageUrls.push(url);
                      if(this.imageUrls.length === files.length){
                       
                          resolve(this.imageUrls);
                      }
                    },
                    err=>{
                        console.log(JSON.stringify("firebase uploading error"+err));
                        reject(err)
                    });
                  });
            }


        });

        }

        uploadAnyImageToFirebase(files: File[],folderName: String) {
        
            const error = false;
    
            return new Promise((resolve,reject) => {
    
                this.imageUrls =[];
                for(let i =0 ; i < files.length ; i++){
    
                    let firstURL =files[i];
                    console.log(firstURL);
                    let path = `${folderName}/${firstURL.name}${(new Date()).getTime()}`;
                    let ref = this.store.ref(path);
                    this.store.upload(path, firstURL).then(rst => {
                        rst.ref.getDownloadURL().then(url => {
                          console.log('result url : ' +i+' : '+url);
                          this.imageUrls.push(url);
                          if(this.imageUrls.length === files.length){
                           
                              resolve(this.imageUrls);
                          }
                        },
                        err=>{
                            console.log(JSON.stringify("firebase uploading error"+err));
                            reject(err)
                        });
                      });
                }
    
    
            });
    
            }

    uploadProfilePicsToFirebase(image, userId) {
        
        

        return new Promise((resolve, reject) => {



               
                //  console.log(firstURL);
                let path = `profilePictures/${new Date().getTime()}${userId}`;
                this.store.ref(path).putString(image, 'data_url').then(rst=>{
                    rst.ref.getDownloadURL().then(url=>{
                       // console.log("url"+url);
                        this.profilePicImageUrl=url;
                        resolve(this.profilePicImageUrl);
                    })
                },
                err=>{
                    console.log("error"+JSON.stringify(err));
                    reject(err);
                }
                
                )
                // let ref = this.store.ref(path);
                // this.store.upload(path, firstURL).then(rst => {
                //     rst.ref.getDownloadURL().then(url => {
                //         console.log("url"+url);
                //         this.imageUrls.push(url);
                       
                //             resolve(this.imageUrls);
                      
                //     },
                //         err => {
                //             console.log(JSON.stringify("error" + err));
                //             reject(err)
                //         });
                // });
          

        });

    }


    uploadVideoToFirebase(video, userId) {
        
        

        return new Promise((resolve, reject) => {



               
                //  console.log(firstURL);
                let path = `video/${new Date().getTime()}${userId}`;
                this.store.ref(path).putString(video, 'data_url').then(rst=>{
                    rst.ref.getDownloadURL().then(url=>{
                       // console.log("url"+url);
                        this.videoImageUrl[0]=url;
                        resolve(this.videoImageUrl);
                    })
                },
                err=>{
                    console.log("error"+JSON.stringify(err));
                    reject(err);
                }
                
                )
                // let ref = this.store.ref(path);
                // this.store.upload(path, firstURL).then(rst => {
                //     rst.ref.getDownloadURL().then(url => {
                //         console.log("url"+url);
                //         this.imageUrls.push(url);
                       
                //             resolve(this.imageUrls);
                      
                //     },
                //         err => {
                //             console.log(JSON.stringify("error" + err));
                //             reject(err)
                //         });
                // });
          

        });

    }
}