# NestJS-Passport-Session

Just having some trouble with NestJS, Passport, and Sessions. Currently using an in memory session storage for testing purposes.

## Reproduction

1. created an env file (.env)
2. Add GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL, GOOGLE_SCOPE, SESSION_SECRET, and PORT
3. Start the server using your package manager of choice with the `start:dev` script
4. Make a Browser request to `<your_host>/api/auth/google/login`
5. Login through Google
6. Check the browser to see no cookie or session info
7. Check the network request to see the `set-cookie` header with information
