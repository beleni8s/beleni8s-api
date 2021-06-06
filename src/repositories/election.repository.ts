import {inject} from '@loopback/core';
import {DefaultKeyValueRepository, juggler} from '@loopback/repository';
import {Beleni8SDataSourceDataSource} from '../datasources';
import {Election} from '../models/election.model';
import {
  Count,
  CountSchema
} from '@loopback/repository';

export class ElectionRepository extends DefaultKeyValueRepository<
  Election
> {
  constructor(
    @inject('datasources.Beleni8sDataSource') dataSource: Beleni8SDataSourceDataSource,
  ) {
    super(Election, dataSource);
  }
  private createElectionObject(electionData: Partial<Election>): Election {
    const election = new Election();
    // belenios-(tools generate-token
    // election.title =  electionData.titre_jaune;
    // election.desc = electionData.desc_jaune;
    return election;
  }
  private createElection(electionData: Partial<Election>): Election {
    const election = this.createElectionObject(electionData);
    /// election.id = this.getId();
    /// election.creationDate = new Date('2020-05-24');
    /// election.ratings = [2, 4];
    return election;
  }
  // async create(data: RecipeInput) {
  async create(data: any): Promise<Election> {
    const createdElection = this.createElection(data);
    return createdElection;
  }

  async count(data: any): Promise<Number> {
    const createdElection = this.countElections();
    return createdElection;
  }

  // private async countElections(): Promise<Count> {
  private countElections(): Number {
    /* const electionCount = new Promise<Count>(() => {
      console.log("ok c fait");
      return 56;
    }); */
    let electionCount: number = 56;
    return electionCount;
  }
}
