import { TestBed } from '@angular/core/testing';

import { TeacherRouteGuardService } from './teacher-route-guard.service';

describe('TeacherRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherRouteGuardService = TestBed.get(TeacherRouteGuardService);
    expect(service).toBeTruthy();
  });
});
