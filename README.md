## LeetTrack Web App 📈

Record, track, and visualise your Leetcode progress with a single click. 

## Preview
![table](https://github.com/P0u4a/leetcode-tracker-web/assets/66873325/3b3f8d62-0bcc-472e-8e09-52eab50bc15b)
![time graph](https://github.com/P0u4a/leetcode-tracker-web/assets/66873325/b1048646-fb81-4fb1-8830-2b03758e3e8e)
![difficulty ratios](https://github.com/P0u4a/leetcode-tracker-web/assets/66873325/12b0fb3f-a243-4616-b7d6-d05ff0f0f1af)
![topic counts](https://github.com/P0u4a/leetcode-tracker-web/assets/66873325/053647db-017c-4a7a-a53f-c9cd60047d51)

## Running Locally

### Installation
1. Clone the repository with `git clone https://github.com/P0u4a/leetcode-tracker-web.git`
2. Run `pnpm install` to install dependencies
3. Create a `.env.local` file in the project root
### Database
On [Turso](https://turso.tech/) create a new database, note down the connection url of your new DB. Make sure you also have the Turso CLI installed. Then run `turso auth token` to get your auth token for connecting to the DB. Copy your `TURSO_AUTH_TOKEN` and `TURSO_CONNECTION_URL` values into your `.env.local` file.

Run `pnpm run db:generate` to generate your SQL files from the drizzle schema. Then run `pnpm run db:push` to push the changes into your Turso database. You can customise these commands inside `package.json`.

### Authentication
Run `pnpx auth secret` to generate the `AUTH_SECRET` env variable for NextAuth. 

Create a test OAuth app on your GitHub account. Set the callback URL to `http://localhost:3000/api/auth/callback/github` and copy over the client ID and client secret into your `.env.local` file, named as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` respectively.

### Running
Run `pnpm run dev` to start the project in dev mode.
