import { ComponentFixture,TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let el : DebugElement;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => TestBed.configureTestingModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [AppComponent],
    imports: [HttpClientTestingModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fyle-frontend-challenge');
  });

  
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('fyle-frontend-challenge app is running!');
  });

   
  it(`check error message`, () => {
    const fixture = TestBed.createComponent(AppComponent); 
    const app = fixture.componentInstance;
    expect(app.errorMessage).toEqual('Post not available');
  });

});

