const AirtablePlus = require('airtable-plus')

const API_KEY = process.env.AIRTABLE;

export const registrationsAirtable = new AirtablePlus({
  baseID: 'keyZ30n4rjB074yDH',
  apiKey: API_KEY,
  tableName: 'model',
})
