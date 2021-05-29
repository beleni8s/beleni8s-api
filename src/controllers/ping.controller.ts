import {inject} from '@loopback/core';
import * as shelljs from 'shelljs';

import {
  Request,
  RestBindings,
  get,
  response,
  ResponseObject,
} from '@loopback/rest';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/ping')
  @response(200, PING_RESPONSE)
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    // -- Dans cette partie, hje vais exécuter belenios-tool.
    let demoPierreCommand = shelljs.exec(`cd /tmp/pierre && belenios-tool generate-token`);
    if (demoPierreCommand.code !== 0) {
      // throw new Error(`{[ReleaseProcessStatePersistenceManager]} - [tagReleaseStart(tag_message: string): void] - An Error occurred executing the [git tag -l | grep ${tag_id}] shell command. Shell error was [` + isThisAResumeReleaseCmdResult.stderr + "] ")
      console.log(`{[PingController]} - [tagReleaseStart(tag_message: string): void] - there has been a problme executing 'cd /tmp/pierre && echo 'et voilà pierre' > le.ficheir.de.pierre' `)
    } else {
      let isThisAResumeReleaseCmdStdOUT: string = demoPierreCommand.stdout;
      console.log(`{[PingController]} - [get('/ping')] - QUICK PIERRE : /tmp/pierre/le.ficheir.de.pierre a été créé`)
    }
    // ---
    return {
      greeting: 'Hello from Beleni8s-api',
      date: new Date(),
      message_a_pierre: "Maintenant tu vois comment ça marche",
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

}
