import { TestBed } from '@angular/core/testing';

import { TodolistService } from '../core/services/todolist.service';

describe('TodolistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodolistService = TestBed.get(TodolistService);
    expect(service).toBeTruthy();
  });
});
