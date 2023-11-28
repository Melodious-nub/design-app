import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  form: FormGroup;
  JSON: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      users: this.fb.array([])
    });
  }

  get usersFormArray() {
    return this.form.get('users') as FormArray;
  }

  onFileChange(ev: any) {
    let workBook = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      const jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.fillFormWithData(jsonData['Sheet1']); // Assuming 'Sheet1' is your sheet name
    };
    reader.readAsBinaryString(file);
  }

  fillFormWithData(data: any[]) {
    // Clear the form array
    while (this.usersFormArray.length !== 0) {
      this.usersFormArray.removeAt(0);
    }

    // Add a group for each user
    data.forEach(userData => {
      this.addUserGroup(userData);
    });
  }

  addUserGroup(userData: any = { name: '', email: '' }) {
    const userGroup = this.fb.group({
      name: [userData.name, Validators.required],
      email: [userData.email, [Validators.required, Validators.email]]
    });
    this.usersFormArray.push(userGroup);
  }

  // Optional: Function to handle form submission
  onSubmit() {
    console.log(this.form.value.users);
  }

}
