import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactlistService {
    contactlist: any[];

  constructor() {
      this.contactlist = [];
  }

    addContact(contact: any) {
        this.contactlist.push(contact);
    }

    getContacts() {
        return this.contactlist;
    }


}
