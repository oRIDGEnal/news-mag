import { TestBed } from '@angular/core/testing';

import { NewsroomapiService } from './newsroomapiservice.service';

describe('NewsroomapiService', () => {
  let service: NewsroomapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsroomapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
