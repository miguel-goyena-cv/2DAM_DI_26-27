import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-photo-profile',
  styleUrl: './photo-profile.scss',
  templateUrl: './photo-profile.html',
})
export class PhotoProfile {

  title = input("Title");
  srcImage = input("default.jpg");
  messageClick = input("");
  eventClick = output<string>();

  public takePhoto(){
    this.eventClick.emit(this.messageClick());
  }
}
