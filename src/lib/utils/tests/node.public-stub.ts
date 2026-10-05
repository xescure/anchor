import type * as KeetaNetClient from '@keetanetwork/keetanet-client';
import type Resolver from '../../resolver.js';

type CreateNodeAndClientResponse = {
	node: never;
	client: InstanceType<typeof KeetaNetClient.Client>;
	userClient?: InstanceType<typeof KeetaNetClient.UserClient>;
	give(account: InstanceType<typeof KeetaNetClient.lib.Account>, amount: bigint): Promise<void>;
	fees: {
		disable: () => void;
		enable: () => void;
		addFeeFreeAccount: (account: InstanceType<typeof KeetaNetClient.lib.Account>) => void;
	};
	destroy: () => Promise<void>;
	[Symbol.asyncDispose]: () => Promise<void>;
};

type KeetaNetClientGenericAccount = NonNullable<ConstructorParameters<typeof KeetaNetClient.UserClient>[0]['signer']>;
type KeetaNetClientSeed = Parameters<typeof KeetaNetClient.lib.Account.fromSeed>[0];

function unavailable(): never {
	throw(new Error('This test requires "@keetanetwork/keetanet-node", which is not publicly available (running in "make public-dev" mode)'));
}

export async function createNodeAndClient(userAccount: KeetaNetClientGenericAccount, repAccountSeed?: KeetaNetClientSeed): Promise<Omit<CreateNodeAndClientResponse, 'userClient'> & Required<Pick<CreateNodeAndClientResponse, 'userClient'>>>;
export async function createNodeAndClient(userAccount?: KeetaNetClientGenericAccount, repAccountSeed?: KeetaNetClientSeed): Promise<CreateNodeAndClientResponse>;
export async function createNodeAndClient(_ignore_userAccount?: KeetaNetClientGenericAccount, _ignore_repAccountSeed?: KeetaNetClientSeed): Promise<CreateNodeAndClientResponse> {
	unavailable();
}

export async function setResolverInfo(
	_ignore_account: KeetaNetClientGenericAccount,
	_ignore_userClient: InstanceType<typeof KeetaNetClient.UserClient>,
	_ignore_value: Parameters<typeof Resolver.Metadata.formatMetadata>[0]
): Promise<void> {
	unavailable();
}
