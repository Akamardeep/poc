import { TestBed } from '@angular/core/testing';

import { GoalsServicesService } from './goals.services.service';

describe('GoalsServicesService', () => {
  let service: GoalsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
