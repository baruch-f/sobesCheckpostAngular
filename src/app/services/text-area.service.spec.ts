import { TestBed } from '@angular/core/testing';

import { TextAreaService } from './text-area.service';

describe('TextAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextAreaService = TestBed.get(TextAreaService);
    expect(service).toBeTruthy();
  });
});
