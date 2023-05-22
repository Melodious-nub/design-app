import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  
  userMessage: string = '';
  hide = true;

  sendMessage() {
    // Implement your logic to handle the sent message
    console.log('User message:', this.userMessage);
    // Clear the input field after sending
    this.userMessage = '';
  }

  message: string = '';

  adjustTextAreaHeight(textarea: any) {
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

  onFileSelected(e:any) {
    
  }
  
  // for audio design and output
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  audioPaused: boolean = true;
  audioDuration: number = 0;
  currentTime: number = 0;

  ngAfterViewInit() {
    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      this.updateProgressBar();
    });

    this.audioPlayer.nativeElement.addEventListener('ended', () => {
      this.audioPaused = true;
    });

    this.audioPlayer.nativeElement.addEventListener('durationchange', () => {
      this.audioDuration = this.audioPlayer.nativeElement.duration;
    });
  }

  togglePlayPause() {
    if (this.audioPaused) {
      this.audioPlayer.nativeElement.play();
    } else {
      this.audioPlayer.nativeElement.pause();
    }
    this.audioPaused = !this.audioPaused;
  }

  updateProgressBar() {
    this.currentTime = this.audioPlayer.nativeElement.currentTime;
  }

  changeCurrentTime() {
    this.audioPlayer.nativeElement.currentTime = this.currentTime;
  }

  onKeyup(event: KeyboardEvent) {
    const textareaValue: string = (event.target as HTMLTextAreaElement).value;
    if (textareaValue.includes('@')) {
      alert('You pressed @');
    }
  }

  
}
