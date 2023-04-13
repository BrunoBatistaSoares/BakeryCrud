import { TestBed } from '@angular/core/testing';

import { CurrentCategoryService } from './current-category.service';

describe('CurrentCategoryService', () => {
  let service: CurrentCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
