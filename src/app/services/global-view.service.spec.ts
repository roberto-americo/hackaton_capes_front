import { TestBed } from '@angular/core/testing';

import { GlobalViewService } from './global-view.service';

describe('GlobalViewService', () => {
  let service: GlobalViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
