const dev = process.env.NODE_ENV === `development`
// const stargate = process.env.STARGATE || `http://localhost:9071`
// const rpc = process.env.RPC || `localhost:26657`
// const rpc = 'localhost:26657/socket.io'

// const graphql = process.env.VUE_APP_GRAPHQL_URL || `localhost:8080`
// const graphql = `https://backend.lunie.io/v1/graphql`

// TODO TEMP
// const stargate = `https://lcd.nylira.net`
// const stargate  = `https://us-central1-staking-explorer-c9991.cloudfunctions.net/mocks`
const stargate = `http://localhost:8080`

// const rpc = `https://rpc.nylira.net`
// const rpc = ``
// const graphql = `https://backend.lunie.io/v1/graphql`

const graphql = ``

export default {
  name: `Lunie`,
  development: dev,
  network: dev ? `testnet` : `cosmoshub`,
  stargate,
  rpc,
  graphql,
  google_analytics_uid: process.env.GOOGLE_ANALYTICS_UID || '',
  node_halted_timeout: 120000,
  block_timeout: 10000,
  default_gas_price: dev ? 1e-9 : 2.5e-8, // Recommended from Cosmos Docs

  // Ledger
  CosmosAppTestModeAllowed: false,
  mobileApp: Boolean(process.env.MOBILE_APP),

  e2e: process.env.VUE_APP_E2E
}
