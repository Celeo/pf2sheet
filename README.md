# pf2sheet

Pathfinder 2 character sheet.

## Repurposing

You can use this for your own character, but it's not something I'm actively supporting.

To do so,

1. Fork
1. Change the values in `src/data.json`
1. Build and deploy however you like.

I'm using GitHub Actions to deploy to [surge.sh](https://surge.sh) whenever I push. If you want to do the same (it's free), you'll need to sign up for surge, create a token, and put that into your repository's secrets so that it can be used in the Action workflow.

## Note

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
