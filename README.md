# manage-test-users

This is a script to register a new test user and log in with it on a specific website.
If you know the base URL of the website, you can follow the tutorial below to get it up and running.

## features

Define test users in `cypress/fixtures/users.json` and

- register/delete them
- login/logout

## installation

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

## usage

There is a single spec file called `userinteraction.cy.ts` in the `cypress/e2e` folder.
Its `before` will register the given users from `cypress/fixtures/users.json`.
Its `after` hook will delete them in order to clean up.
If you only want this to happen, you can run the script already.
This is because there is a single test that does nothing declared with `.only`, i.e:

```ts
it.only("does nothing", () => {});
```

If you want to run the other tests, you have to change the `only` call to the desired test.
I included four convenience functions that you can use to create new tests:

- `loginUser(user: User)`
- `logoutUser()` (assumes you are logged in)
- `registerNewUser(user: User)`
- `deleteUser()` (assumes you are logged in)
