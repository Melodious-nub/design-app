import { Component } from '@angular/core';

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
}
