## LeetTrack Web App 📈

Record, track, and visualise your Leetcode progress with a single click. 

## Preview
![data table](https://github.com/P0u4a/leetcode-tracker-web/assets/66873325/7874b765-f62e-4f03-9a87-6a414a7e65d6)
![time graph](https://github.com/P0u4a/leetcode-tracker-web/assets/66873325/5f6902eb-fbe2-4359-b706-a278c32a499f)
![difficulty ratios](https://github.com/P0u4a/leetcode-tracker-web/assets/66873325/008e6fcb-f2fb-41ec-be20-fb3b03d37b07)
![topic counts](https://github.com/P0u4a/leetcode-tracker-web/assets/66873325/96c0f2ae-d946-484e-8587-450683f22eda)

## Running Locally

### Installation
1. Clone the repository with `git clone https://github.com/P0u4a/leetcode-tracker-web.git`
2. Run `pnpm install` to install dependencies
3. Create a `.env.local` file in the project root
### Database
On [planetscale](https://planetscale.com/) create a new database. Copy your `DATABASE_URL`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `DATABASE_HOST` values into your `.env.local` file.

Run `pnpm run db:generate` to generate your SQL files from the drizzle schema. Then run `pnpm run db:push` to push the changes into your planetscale database. You can customise these commands inside `package.json`.

### Authentication
On [clerk](https://clerk.com/) create a new application, and enable the GitHub OAuth provider. You will also have to go into your GitHub account and create the necessary `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` files. Instructions can be found [here](https://clerk.com/docs/authentication/social-connections/github). Follow Clerk's instructions on the necessary enviornment variables you need to set. 

To sync your database with Clerk's user database, create a **webhook** inside clerk, and add the `WEBHOOK_SECRET` into your `.env.local`. Further instructions on how to setup the webhook can be found [here](https://clerk.com/docs/users/sync-data).

### Running
Run `pnpm run dev` to start the project in dev mode.
