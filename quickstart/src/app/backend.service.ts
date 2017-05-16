import { Injectable, Type } from '@angular/core';

import { LoggerService } from './logger.service';
import { Hero } from './hero';

const HEROES = [
        new Hero('Windstorm', 'Weather mastery'),
        new Hero('Mr. Nice', 'Killing them with kindness'),
        new Hero('Magneta', 'Manipulates metalic objects')
      ];

@Injectable()
export class BackendService {
  constructor(private logger: LoggerService) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Hero) {
      // TODO get from the database
      return Promise.resolve<Hero[]>(HEROES);
    }
    let err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/