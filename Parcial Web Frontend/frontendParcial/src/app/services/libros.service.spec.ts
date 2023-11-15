import { TestBed } from '@angular/core/testing';

import { LibrosService } from './libros.service';

describe('InsertarLibrosService', () => {
  let service: LibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
