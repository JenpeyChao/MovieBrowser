import { TestBed } from '@angular/core/testing';

import { MovieBrowserService } from './movie-browser.service';

describe('MovieBrowserService', () => {
  let service: MovieBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
