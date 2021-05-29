// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-rest-crud
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property} from '@loopback/repository';

@model()
export class Election extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number; /// belenios Election UUID

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  uuid: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isOver?: boolean;

  constructor(data?: Partial<Election>) {
    super(data);
  }
}

export interface ElectionRelations {
  // describe navigational properties here
}

export type ElectionWithRelations = Election & ElectionRelations;
