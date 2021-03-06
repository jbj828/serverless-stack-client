const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51IEEspHn08aBz9sWbUTkNXGssSssM3PQFhcEhrUlqvUnGNMbWITDPI1uH1T59gCZEOYHXbP9WuFFYrDD6rCkA4U400SjMVenov",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-image",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5n9oodxolc.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_eWDYQq9Y7",
    APP_CLIENT_ID: "3l6faej4tevbl3mmhhl8qe5r99",
    IDENTITY_POOL_ID: "us-east-1:481d0d3a-342a-462f-afe0-ba9bc25fafdd",
  },
};

export default config;
