import { versionFromGitTag } from 'absolute-version';
import { Verifier } from '@pact-foundation/pact';
import branchName from 'current-git-branch';
import server from '../../app';
import { LogLevel } from '@pact-foundation/pact-core';

const baseUrl = `http://localhost:${process.env.SERVER_PORT || 9080}`;

const providerOptions = {
  logLevel: 'INFO' as LogLevel,
  providerBaseUrl: baseUrl,
  provider: 'product-of-the-main-diagonal-of-a-square-matrix-typescript_app',
  providerBranch: `${branchName()}`,
  providerVersion: versionFromGitTag({
    tagGlob: '[0-9]*',
  }),
  matchingRules: {
    body: {},
  },
  stateHandlers: {},
};

const pactUrl =
  './pact/pacts/product-of-the-main-diagonal-of-a-square-matrix-typescript_client-product-of-the-main-diagonal-of-a-square-matrix-typescript_app.json';

if (process.env.CI) {
  Object.assign(providerOptions, {
    pactBrokerUrl: 'https://gotreasa.pactflow.io/',
    pactUrls: [pactUrl],
    publishVerificationResult: true,
  });
} else {
  Object.assign(providerOptions, {
    pactUrls: [pactUrl],
  });
}

describe('Product of the main diagonal of a square matrix - TypeScript Provider', () => {
  afterAll(async () => {
    await server.close();
  });

  test('tests Product of the main diagonal of a square matrix - TypeScript api routes', async () => {
    const output: string = await new Verifier(providerOptions).verifyProvider();
    console.log(output);
    expect(output).toContain('finished: 0');
  });
});
