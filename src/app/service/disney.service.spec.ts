import { TestBed } from '@angular/core/testing';

import { DisneyService } from './disney.service';

describe('DisneyService', () => {
  let service: DisneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
