import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { AlbumService } from '../shared/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {
  
  albumForm : FormGroup;

  constructor(private albumService: AlbumService, private router: Router) { }

  get songs(): FormArray {
    return this.albumForm.get('songs') as FormArray;
  }
  addSong(){
    this.songs.push(
      new FormGroup({
        name: new FormControl(),
        length: new FormControl()
      })
    );
  }
  remove(index){
    this.songs.removeAt(index);
  }

  get name(){
    return this.albumForm.get('name');
  }
  
  ngOnInit() {

    this.albumForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      author: new FormControl(),
      grade: new FormControl(0, [Validators.min(0), Validators.max(5)]),
      songs: new FormArray([
        new FormGroup({
          name: new FormControl(),
          length: new FormControl()
        })
      ])
    })

    this.albumForm.valueChanges.subscribe(
      (value) => console.log(value)
    )
  }

  

  onSubmit(){

    if(this.albumForm.valid){

      const album = this.albumForm.value;
      album.src = 'assets/default.png'
      this.albumService.createAlbum(album)
      .subscribe(
        () => this.router.navigate(['/album'])
      )
      
    }
  }
}
