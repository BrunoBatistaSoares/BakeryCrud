import { TestBed } from '@angular/core/testing';

import { ShowLoginModalService } from './show-login-modal.service';

describe('ShowLoginModalService', () => {
  let service: ShowLoginModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowLoginModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
