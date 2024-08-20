import { TestBed } from '@angular/core/testing';

import { LibraryDataService } from './services/library-data/library-data.service';

describe('LibraryDataService', () => {
  let service: LibraryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
