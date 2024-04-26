# manage-test-users

This is a script to register a new test user and log in with it on a specific website.
If you know the base URL of the website, you can follow the tutorial below to get it up and running.

## features

define test users in `cypress/fixtures/users.json` and

- register/delete them
- login/logout

## tutorial

### prerequisites:

- node
- npm
- npx
- a suitable browser (NOT Safari)

1. clone this repository
2. `npm install`
3. in the `cypress/fixtures` folder create a `websites.json`:

```json
{ "baseUrl": "https://<the_specific_website's_baseUrl>" }
```

4. `npm run cy:open` from the project's root folder
