import { TestBed } from '@angular/core/testing';

import { ServiceMessagesService } from './service-messages.service';

describe('ServiceMessagesService', () => {
  let service: ServiceMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
