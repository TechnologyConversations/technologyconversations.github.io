# BDD Assistant

### Definition
BDD Assistant is an open source project that pretends to facilitate the creation and execution of Behavior Driven Development (BDD) stories as a way to better define the requirements.

It consists of the following three Github repositories:
  * [TechnologyConversations.github.io](https://github.com/TechnologyConversations/technologyconversations.github.io): It's the repository where this readme is hosted and the BDD Assistant product page.
  * [TechnologyConversationsBdd](https://github.com/TechnologyConversations/TechnologyConversationsBdd): It is the repository that contains the editor, runner, composites, etc... used by the Assistant. See the components below for more information.
  * [TechnologyConversationsBddSteps](https://github.com/TechnologyConversations/TechnologyConversationsBddSteps): This repository contains a set of predefined web steps that cover basic web operations (click link, select element, check text, etc...)

BDD Assistant provides you with a web interface that allows you to use the following components:

 * BDD story editor: One of the most important features in the BDD assistant is the possibility to create new BDD stories by using the editor that comes in the site.
 * BDD story runner: The BDD Assistant allows you to run any story that can be accessed from the Story repository. Since this project is initially based in BDD stories for Web sites, it allows running these stories against the web site for which represent the requirements.
 * Story repository: Once you've finished writing your stories, you can save them and they'll remain in the story repository for later reading, modification or execution.
 * Set of Web Steps: The BDD Assistant comes with a predefined set of Web Steps for its first version.
 * Composites manager: This module allows the management of composites for later usage in the stories. Read more about composites [here](http://jbehave.org/reference/stable/composite-steps.html)

## Getting started updating the BDD Assistant page

To get you started you can simply clone the [technologyconversations.github.io](https://github.com/TechnologyConversations/technologyconversations.github.io) repository and install the dependencies:

### Cloning

Clone the technologyconversations.github.io repository using [git][git]:

```
git clone https://github.com/TechnologyConversations/technologyconversations.github.io
cd technologyconversations.github.io
```

### Installing Dependencies:
This website is using in production only [angularJS][angularJS] and [BootstrapCSS][BootstrapCSS].
We're also using npm for running the server, etc and bower for dependencies.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After running it, you should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Running the Application
This project is preconfigured with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

And now browse to the app at `http://localhost:8000/app/index.html`. Here you should be able to see the pages.

## Continuous Integration

This project uses Continuous Integration with Travis CI and Heroku
### Travis CI
[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

### Heroku
[Heroku][heroku] is a cloud-based, scalable server solution that allows you to easily manage the deployment of your application.

Travis and Heroku fit nicely. Once you push your changes to GIT, Travis detects them and runs the script for building the app. Then, as part of building it, it creates a server in Heroku and uses it as a way to verify the functionality of the web.

BDD Assistant website uses the following projects:
 * [git]: http://git-scm.com/
 * [angularJS]: http://angularjs.org/
 * [bootstrapCSS]: http://getbootstrap.com/css/
 * [bower]: http://bower.io
 * [node]: http://nodejs.org
 * [travis]: https://travis-ci.org/
 * [http-server]: https://github.com/nodeapps/http-server
 * [heroku]: http://www.heroku.com

If you think that BDD Assistant could help your project, you can find out more information about in the "About BDD Assistant" section of the navigation.