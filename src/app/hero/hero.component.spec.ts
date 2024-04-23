// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HeroComponent } from './hero.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// describe('HeroComponent', () => {
//   let component: HeroComponent;
//   let fixture: ComponentFixture<HeroComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [HeroComponent],
//       schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      
//     });
//     fixture = TestBed.createComponent(HeroComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });    
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    // Provide a mock value for the data input
    const mockData = [
      {
        owner: {
          avatar_url: 'https://example.com/avatar.png',
          login: 'example_user',
          html_url: 'https://github.com/example_user',
        },
      },
    ];
    // Create the component with the mock data
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    component.data = mockData; // Assign the mock data to the component's data input
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
