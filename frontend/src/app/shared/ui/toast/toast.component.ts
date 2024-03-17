import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})

export class ToastComponent {
  constructor(private messageService: MessageService) { }

  showToast(message:string){
    this.messageService.add({severity:'success', summary:message, detail:'completed'})
  }

  showSuccess(detail: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  }

  showError(detail: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: detail});
  }

}
