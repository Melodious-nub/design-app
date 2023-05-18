import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design-app';

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
}
