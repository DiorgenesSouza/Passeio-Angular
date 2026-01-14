import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: 'http://localhost:4200',
  clientId: '373352588409-efaq7oga0fq530q81nb98ua0lrt6mt40.apps.googleusercontent.com',
  strictDiscoveryDocumentValidation: false, // ADICIONE ESTA LINHA
  scope: 'openid profile email', // Adicione isso para garantir que os dados venham
}