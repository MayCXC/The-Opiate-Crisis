# the-opiate-crisis

> Bobconcatenators CTC 2018 Entry

Project is hosted at https://the-opiate-crisis.herokuapp.com/

## Challenge: The Opiate Crisis
The opiate crisis is a national problem— but one that has hit Connecticut particularly hard.  The state, however, has a number of resources that are designed to help individuals and families that are struggling with addiction.

Your team is charged with creating an application that provides useful information to families and addicts in an integrated form.  For example, an application might provide an integrated geolocation based display of treatment resources available— or perhaps directions to the nearest Pharmacy equipped to distribute Naloxone.  The specific content you choose to display in your app, and the manner in which you display the content to the user is up to you and your team.

Using data from the Connecticut Open Data initiative ( http://data.ct.gov ) you should create an app that both provides useful data and directs families to appropriate resources:


What types of conclusions can be drawn from an analysis of the data?  For example, is there a strong correlation between areas where accidental overdose deaths occur and treatment resources?  Does an analysis of the data provide any type of indication of areas that are under-resourced?   Does the data lead you to conclude that any regions of Connecticut are handling the crisis better than others?


What information would be helpful for families and addicts who seek treatment?  What type of emergency information could the app provide that might be helpful in a crisis?  Can the app match families and addicts with treatment providers in a meaningful way?

You will find numerous useful resources in the Health and Human Services Category of the Connecticut Data site located at https://data.ct.gov/browse?category=Health+and+Human+Services.  By no means is your team obligated to limit yourselves to data from that category.  All data used must be accessed via REST API or direct dataset download.  No embeds from the CT.gov site will be permitted to be displayed in your project.

## Design: Rapid development
We have three weeks to complete this project, and little shared knowledge on javascript frameworks or the language in general. After some quick testing, the first commit to this repository was a simple drop-down menu test made with a new [Vue CLI](https://cli.vuejs.org/guide/) project, [Vue router](https://router.vuejs.org/), and [Bootstrap Vue](https://bootstrap-vue.js.org/) in close to defualt development modes. We ended up forking and modifying this test for a hackathon entry, which provided more insight on some Vue.js idioms that we then used in this project. After the functionality of the website was mostly complete, we replaced the development server with express and [express-history-api-fallback](https://www.npmjs.com/package/express-history-api-fallback), to continue using Vue router instead of express routes.

### Analysis: Pros
The main benefit of our project design was the speed of development. The workflow of editing a Vue project file, automatically updating the development server, and refreshing the locally hosted webpage meant continuous and uninterrupted progress. This also made it easier to lose track of the scope of our commits, but we avoided conflicts by working on different parts of the code, working at different times, and when absolutely necessary branching and merging.

### Analysis: Cons
The biggest consequence of our project design was incompatibilities that arose from the ad-hoc setup we started with.

    - Without realizing, the first commit was using an soon-to-be outdated Bootstrap Vue configuration, and after we started the project several vulnerabilities were found in its version of webpack-dev-server.
    - We had also thrown together a nonstandard express setup that could not be deployed on heroku, so we used a digitalocean droplet instead. This had the unexpected consequence of breaking the geolocation API, as the droplet only served HTTP and geolocation requires an HTTPS connection on modern browsers. We disabled this security check on our testing computer, but did not fix the issue on other computers before the competition. Luckily, the judges were very understanding and let us present with our own computer, so the full functionality of the website was available during our presentation.
    - At one point we realized that `express-history-api-fallback` was serving all of our project files, including offline Node scripts and Vue project files. None of these were resolved by URLs, but the files were listed in the chrome developer console.
    - After the competition, we created an up to date project, fixed the express configuration, and deployed to heroku, which fixed all of these issues.

## Result: Success
We tied with UCONN for first place, the fourth consecutive year Quinnipiac has put a student on the winning time. It was a good experience and a good time for everyone, we left with way more friends and way fewer resumes than we came with. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
