import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [], 
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    emailjs.init('ObpZAg_GRfvK6YZK6'); 
  }

  async send() {
    emailjs.send("service_ps6s2bb", "template_igxilvt", {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
    
      subject: this.form.value.subject,
      message: this.form.value.message,
    });
    
    alert("message has ben send");
    this.form.reset();
  }
  

  

 
  }


