const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

// Country type
const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    name: { type: GraphQLString },
    topLevelDomain: { type: new GraphQLList(GraphQLString) },
    alpha3Code: { type: GraphQLString },
    capital: { type: GraphQLString },
    subregion: { type: GraphQLString },
    population: { type: GraphQLInt },
    flag: { type: GraphQLString },
    languages: { type: new GraphQLList(LanguageType) },
    translations: { type: TranslationType },
  }),
});

// Translation type
const TranslationType = new GraphQLObjectType({
  name: "Translation",
  fields: () => ({
    de: { type: GraphQLString },
    es: { type: GraphQLString },
    fr: { type: GraphQLString },
    ja: { type: GraphQLString },
    it: { type: GraphQLString },
    br: { type: GraphQLString },
    pt: { type: GraphQLString },
    nl: { type: GraphQLString },
    hr: { type: GraphQLString },
    fa: { type: GraphQLString },
  }),
});

// Languages type
const LanguageType = new GraphQLObjectType({
  name: "Language",
  fields: () => ({
    iso639_1: { type: GraphQLString },
    iso639_2: { type: GraphQLString },
    name: { type: GraphQLString },
    nativeName: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return axios
          .get("https://restcountries.eu/rest/v2/regionalbloc/eu")
          .then((res) => res.data);
      },
    },
    country: {
      type: CountryType,
      args: {
        alpha3Code: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(`https://restcountries.eu/rest/v2/alpha/${args.alpha3Code}`)
          .then((res) => res.data);
      },
    },
    languages: {
      type: GraphQLList(LanguageType),
      resolve(parent, args) {
        return axios
          .get("https://restcountries.eu/rest/v2/regionalbloc/eu")
          .then((res) => res.data);
      },
    },
    language: {
      type: LanguageType,
      args: {
        alpha3Code: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(`https://restcountries.eu/rest/v2/alpha/${args.alpha3Code}`)
          .then((res) => res.data);
      },
    },
  },
});

//

module.exports = new GraphQLSchema({
  query: RootQuery,
});
