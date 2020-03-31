import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/model/test';
import { TestService } from 'src/app/service/test.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  tests:Test[];

  constructor(private testService:TestService) { }

  ngOnInit() {
    this.testService.findAllTest().subscribe(data => this.tests = data);
    console.log(this.tests);
  }

}
