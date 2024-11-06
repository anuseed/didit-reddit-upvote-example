## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

## Week 11 Assignment Reflection

# Deploying to vercel

- I watched the video on how to setup Next Auth using github and followed the instructions there as well as those in the readme to get the auth_github_id and auth_github_secret and added these to the .env.local file.
- I then created a supabase project and added all the sql from the schema.sql to create the database tables needed for the project. I linked the database by adding all the .env variables to the .env.local file.
- There was one error in the sql that needed to be fixed first ( an extra ,), once done the sql ran without errors.
- I tested that the database was working in my local host then I made a new project in vercel and linked the github repo to it.
- At this point it ran without errors and I was able to deploy to vercel.

# Errors after deployment

- I got a link error after deployment when trying to login in. This was because I needed to change the paths to contain the vercel url in my github auth page.

# Features added and errors fixed

- Added error page and not found page
- Not found page works with link that takes you back to the main page
- For the error page the reset button doesn't work in that it creates a blank screen and does not take you to the previous page - fixed this when I removed the html body tags
- Added post title with metadata to display in tab by adding a generateMetadata function.
- Changed img to Image and changed the authorisation for src to include all images in the next.config.js file
