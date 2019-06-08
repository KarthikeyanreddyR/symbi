import { TestBed } from '@angular/core/testing';

import { CommonUtilsService } from './common-utils.service';

describe('CommonUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonUtilsService = TestBed.get(CommonUtilsService);
    expect(service).toBeTruthy();
  });
});
