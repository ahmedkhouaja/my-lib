import { TestBed } from '@angular/core/testing';

import { MybuttonsService } from './mybuttons.service';

describe('MybuttonsService', () => {
  let service: MybuttonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybuttonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
