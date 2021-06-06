import {inject} from '@loopback/core';
import {DefaultKeyValueRepository, juggler} from '@loopback/repository';
import {Beleni8SDataSourceDataSource} from '../datasources';
import {Election} from '../models/election.model';
import {
  Count,
  CountSchema
} from '@loopback/repository';
import * as shelljs from 'shelljs';

export class BeleniosExecutor {
  constructor() {
  }

  private create(electionData: Partial<Election>): string {
    let electionUuid: string = "vbcvb";

    // -- Dans cette partie, je vais exécuter belenios-tool pour créer une élection, et obtenir en retour le UUID de cette élection.
    let beleniosCommand = shelljs.exec(`belenios-tool generate-token`);
    if (beleniosCommand.code !== 0) {
      // throw new Error(`{[ReleaseProcessStatePersistenceManager]} - [tagReleaseStart(tag_message: string): void] - An Error occurred executing the [git tag -l | grep ${tag_id}] shell command. Shell error was [` + isThisAResumeReleaseCmdResult.stderr + "] ")
      console.warn(`{[BeleniosExecutor]} - [create(electionData: Partial<Election>): string] - there has been a problem executing 'belenios-tool generate-token' to create the [${electionData.title}] Belenios Election.`)
      let beleniosCommandStdERR: string = beleniosCommand.stderr;
      console.warn(beleniosCommandStdERR)
    } else {
      let beleniosCommandStdOUT: string = beleniosCommand.stdout;
      electionUuid = beleniosCommand.stdout
      console.log(`{[BeleniosExecutor]} - [create(electionData: Partial<Election>): string] - The Belenios Election [${electionData.title}] has successfully been created with UUID [${electionUuid}]`)
    }

    return electionUuid;
  }
  // async create(data: RecipeInput) {
  createElection(data: any): string {
    const createdElection = this.create(data);
    return createdElection;
  }

}
