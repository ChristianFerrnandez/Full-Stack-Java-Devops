import { TestBed } from '@angular/core/testing';

import { TypeuserServicesService } from './typeuser-services.service';

describe('TypeuserServicesService', () => {
  let service: TypeuserServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeuserServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
