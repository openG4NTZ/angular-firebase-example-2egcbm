import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular 5';
  commentList: AngularFireList<any>;
  postList: AngularFireList<any>;
  posts: any[];
  comments: any[];
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  expenseList: Array<any> = [];
  monthList: Array<any> = [];
  schedule: { branch: '' };
  constructor(public afd: AngularFireDatabase) {
    this.expenseList = [
      { code: 'Shopping', name: 'Shopping' },
      { code: 'Rent', name: 'Rent' },
      { code: 'Internet', name: 'Internet' },
      { code: 'Water', name: 'Water' },
      { code: 'Electricity', name: 'Electricity' },
      { code: 'Fuel', name: 'Fuel' },
      { code: 'Other', name: 'Other' },
    ];
    this.monthList = [
      { code: 'January', name: 'January' },
      { code: 'February', name: 'February' },
      { code: 'March', name: 'March' },
      { code: 'April', name: 'April' },
      { code: 'May', name: 'May' },
      { code: 'June', name: 'June' },
      { code: 'July', name: 'July' },
      { code: 'August', name: 'August' },
      { code: 'September', name: 'September' },
      { code: 'October', name: 'October' },
      { code: 'November', name: 'November' },
      { code: 'December', name: 'December' },
    ];
    this.itemsRef = afd.list('userData');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map((changes) => {
      return changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {}
  addItem(newName: string) {
    this.itemsRef.push({
      key: '1',
      Title: this.month,
      Description: this.expense,
      Cost: this.cost_input + '$',
      CreatedBy: 'Serkan',
      Date: new Date(),
    });
  }

  getDataByKey() {
    const data = this.afd
      .object('/posts/-LBzGxbpqtDDfOYZfpY0')
      .valueChanges()
      .subscribe((val) => {
        console.log(val);
      });
  }
  updateItem(key: string) {
    const key1 = '-LBzGxbpqtDDfOYZfpY0';
    const data = this.afd
      .object(`/posts/${key1}`)
      .valueChanges()
      .subscribe((val: any) => {
        const appliedBy = val.appliedBy || [];

        appliedBy.push({
          name: 'Sandeep Patidar',
          comment: 'I can do this in 5 days',
        });
        //console.log(val)
        this.itemsRef.update(key1, { appliedBy: appliedBy });
      });
    //const appliedBy = this.items.appliedBy || [];
    //this.itemsRef.update(key, { appliedBy: 'test' });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }

  getComments() {
    this.commentList = this.afd.list('/comments');
    return this.commentList;
  }

  getPost() {
    this.postList = this.afd.list('/posts');
    return this.postList;
  }

  insertComments() {
    this.commentList.push({
      title: 'Test Comment1',
      description: 'Test Descirption1',
      addedAt: Date.now(),
      updateAt: Date.now(),
    });
  }
  month = '';
  onChangeMonth(picklist_value: string) {
    this.month = picklist_value;
  }
  cost_input = 0;
  onChangeCost(input_value: number) {
    this.cost_input = input_value;
  }
  expense = '';
  onChangeExpense(picklist_value: string) {
    this.expense = picklist_value;
    var x = document.getElementById('Element_Other');
    if (picklist_value == 'Other') {
      x.style.display = 'inline';
    } else {
      x.style.display = 'none';
    }
  }
}

export class CommentModel {
  $key: string;
  Title: string;
  Description: string;
  Cost: number;
  CreatedBy: string;
  Date: Date;
}
