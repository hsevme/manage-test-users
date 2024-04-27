# manage-test-users

This is a script to register a new test user and log in with it on a specific website.
If you know the base URL of the website, you can follow the tutorial below to get it up and running.

## features

Define test users in a json file and have them ready for some end-to-end tests.
Delete those users when tests are complete.

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

4. optional: edit `users.json` inside the `cypress/fixtures` folder
5. `npm run cy:open` from the project's root folder

## usage

There is a single spec file called `userInteraction.cy.ts` in the `cypress/e2e` folder.
Its `beforeAll` hook will register the given users from `cypress/fixtures/users.json`.
Its `afterAll` hook will delete them in order to clean up.

If this is enough for you, you can run the script already.
There is only a single test in there which does nothing:

```ts
it("does nothing", () => {});
```

Assuming that you want to add some real tests with the users, four convenience commands are now available:

- `loginUser(user: User)`
- `logoutUser()` (assumes you are logged in)
- `registerNewUser(user: User)`
- `deleteUser()` (assumes you are logged in)

If you want to create your own test users, edit `users.json`.
The json file represents an array of objects of type _User_.
So, it could look like this:

```json
[
  {
    "firstname": "Happy",
    "lastname": "Hippo",
    "mail": "degahe1869@funvane.com",
    "password": "mYsUpErStRoNgPaSsWoRd!!11"
  }
]
```
