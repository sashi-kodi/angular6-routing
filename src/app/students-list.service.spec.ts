import { TestBed } from '@angular/core/testing';

import { StudentsListService } from './students-list.service';

describe('StudentsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsListService = TestBed.get(StudentsListService);
    expect(service).toBeTruthy();
  });
});
