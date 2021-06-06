# beleni8s-api

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
yarn install
```

## Run the application

```sh
yarn start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
yarn run build
```

To force a full build by cleaning up cached artifacts:

```sh
yarn run rebuild
```

## Fix code style and formatting issues

```sh
yarn run lint
```

To automatically fix such issues:

```sh
yarn run lint:fix
```

## Other useful commands

- `yarn run migrate`: Migrate database schemas for models
- `yarn run openapi-spec`: Generate OpenAPI spec into a file
- `yarn run docker:build`: Build a Docker image for this application
- `yarn run docker:run`: Run this application inside a Docker container

## Tests

```sh
yarn test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Test the Election Endpoint

```bash
export ELEC_TITLE="election_pierre_et_jb_demo"
export ELEC_UUID="ed591787-c8b7-4a6a-b342-9175caffca92"

export JSON_PAYLOAD="{
  \"title\": \"${ELEC_TITLE}\",
  \"uuid\": \"${ELEC_UUID}\"
}"

curl -H 'Content-type: application/json' -X POST -d "${JSON_PAYLOAD}"  http://[::1]:3000/election | jq .


# ---


curl -H 'Accept: application/json' http://[::1]:3000/election/count | jq .

```

* http://[::1]:3000/openapi.json
* http://[::1]:3000/explorer
