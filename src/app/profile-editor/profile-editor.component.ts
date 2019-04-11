import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {ContactlistService} from '../contactlist.service';
import {addRemoveViewFromContainer} from '@angular/core/src/render3/node_manipulation';

@Component({
    selector: 'app-profile-editor',
    templateUrl: './profile-editor.component.html',
    styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
    form;
    constructor(private fb: FormBuilder, private _cs: ContactlistService ) {
        this.form = fb.group({
            name: [],
            number: [],
            address: [],
            email: ['', Validators.required]
        });
    }

    ngOnInit() {

    }


    submitToSave() {
        this._cs.addContact(this.form.value);
        console.log(this._cs.getContacts());
    }

}
