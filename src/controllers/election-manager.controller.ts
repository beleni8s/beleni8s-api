import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Election} from '../models/election.model';
import {ElectionRepository} from '../repositories';

export class ElectionManagerController {
  constructor(
    @repository(ElectionRepository)
    public electionRepository : ElectionRepository,
  ) {}

  @post('/election')
  @response(200, {
    description: 'Election model instance created by Belenios',
    content: {'application/json': {schema: getModelSchemaRef(Election)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Election, {
            title: 'NewElection',
          }),
        },
      },
    })
    election: Election,
  ): Promise<Election> {
    console.log(` donc là JB et Pierre veulent créer une élection Jaune`)
    return this.electionRepository.create(election);
  }

  @get('/election/count')
  @response(200, {
    description: 'Election model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Election) where?: Where<Election>,
  ): Promise<Count> {
    console.log(` donc là JB et Pierre veulent dénombrer les élections Jaunes en cours`)
    return this.electionRepository.count(where);
  }

  /*
  @get('/election')
  @response(200, {
    description: 'Array of Election model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Election, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Election) filter?: Filter<Election>,
  ): Promise<Election[]> {
    return this.electionRepository.find(filter);
  }

  @patch('/election')
  @response(200, {
    description: 'Election PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Election, {partial: true}),
        },
      },
    })
    election: Election,
    @param.where(Election) where?: Where<Election>,
  ): Promise<Count> {
    return this.electionRepository.updateAll(election, where);
  }

  @get('/election/{id}')
  @response(200, {
    description: 'Election model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Election, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Election, {exclude: 'where'}) filter?: FilterExcludingWhere<Election>
  ): Promise<Election> {
    return this.electionRepository.findById(id, filter);
  }

  @patch('/election/{id}')
  @response(204, {
    description: 'Election PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Election, {partial: true}),
        },
      },
    })
    election: Election,
  ): Promise<void> {
    await this.electionRepository.updateById(id, election);
  }

  @put('/election/{id}')
  @response(204, {
    description: 'Election PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() election: Election,
  ): Promise<void> {
    await this.electionRepository.replaceById(id, election);
  }

  @del('/election/{id}')
  @response(204, {
    description: 'Election DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.electionRepository.deleteById(id);
  }
   */
}
