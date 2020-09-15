export const ENV = process.env.RAILS_ENV
export const DEVELOPMENT_API_URL = 'http://localhost:3000/api/v1'
export const PRODUCTION_API_URL = 'some_url.com/api/v1'
export const API_URL = ENV === 'production' ? PRODUCTION_API_URL : DEVELOPMENT_API_URL
