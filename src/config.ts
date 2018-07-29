export const domain = process.env.SCUTTLESPACE_DOMAIN || "scuttle.space";
export const graphqlHostname =
  process.env.SCUTTLESPACE_GRAPHQL_HOSTNAME || "localhost";
export const graphqlPort = process.env.SCUTTLESPACE_GRAPHQL_PORT
  ? parseInt(process.env.SCUTTLESPACE_GRAPHQL_PORT, 10)
  : 4000;
