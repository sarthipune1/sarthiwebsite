import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  public form: Object = {
    components: [
      {
        label: 'First Name',
        placeholder: 'Enter your first name',
        tableView: true,
        key: 'firstName',
        type: 'textfield',
        input: true,
      },
      {
        label: 'District',
        widget: 'choicesjs',
        placeholder: 'Select district',
        tableView: true,
        data: {
          values: [
            {
              label: 'Pune',
              value: 'pune',
            },
            {
              label: 'Mumbai',
              value: 'mumbai',
            },
            {
              label: 'Goa',
              value: 'goa',
            },
          ],
        },
        selectThreshold: 0.3,
        validate: {
          required: true,
        },
        errorLabel: 'Please enter the value',
        key: 'district',
        type: 'select',
        input: true,
      },
      {
        type: 'button',
        label: 'Submit',
        key: 'submit',
        disableOnInvalid: false,
        input: true,
        tableView: false,
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    // this.jsonElement.nativeElement.innerHTML = '';
    // this.jsonElement.nativeElement.appendChild(
    //   document.createTextNode()
    // );
    // this.refreshForm.emit({
    //   property: 'form',
    //   value: event.form,
    // });

    console.log(JSON.stringify(event.form, null, 4));
  }

  onSubmit(event) {
    console.log('Submitting', event);
  }
}
