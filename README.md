# BDD Assistant

### Definition
BDD Assistant is an open source project that pretends to facilitate the creation and execution of Behavior Driven Development (BDD) stories as a way to better define the requirements.

It consists of the following two Github repositories:
  * [TechnologyConversationsBdd](https://github.com/TechnologyConversations/TechnologyConversationsBdd): It is the repository that contains the editor, runner, composites, etc... used by the Assistant. See the components below for more information.
  * [TechnologyConversationsBddSteps](https://github.com/TechnologyConversations/TechnologyConversationsBddSteps): This repository contains a set of predefined web steps that cover basic web operations (click link, select element, check text, etc...)

BDD Assistant provides you with a web interface that allows you to use the following components:

 * BDD story editor: One of the most important features in the BDD assistant is the possibility to create new BDD stories by using the editor that comes in the site.
 * BDD story runner: The BDD Assistant allows you to run any story that can be accessed from the Story repository. Since this project is initially based in BDD stories for Web sites, it allows running these stories against the web site for which represent the requirements.
 * Story repository: Once you've finished writing your stories, you can save them and they'll remain in the story repository for later reading, modification or execution.
 * Set of Web Steps: The BDD Assistant comes with a predefined set of Web Steps for its first version.
 * Composites manager: This module allows the management of composites for later usage in the stories. Read more about composites [here](http://jbehave.org/reference/stable/composite-steps.html)

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