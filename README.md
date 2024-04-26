# register-and-login

This is a script to register a new test user and log in with it on a specific website.
If you know the base URL of the website, you can follow the tutorial below to get it up and running.

## tutorial

1. clone this repository
2. `npm install`
3. in the `cypress/fixtures` folder create a `websites.json`:

```json
{ "baseUrl": "https://<the_specific_website_url>" }
```

4. `npm run cy:open` fromm the project's root folder
