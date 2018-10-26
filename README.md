[![CircleCI](https://circleci.com/gh/careertrek-hacktoberfest-day-2018/careertrek-hacktoberfest-day-2018.github.io/tree/develop.svg?style=shield)](https://circleci.com/gh/careertrek-hacktoberfest-day-2018/careertrek-hacktoberfest-day-2018.github.io/tree/develop) [![dependencies](https://img.shields.io/david/careertrek-hacktoberfest-day-2018/careertrek-hacktoberfest-day-2018.github.io.svg)](https://david-dm.org/careertrek-hacktoberfest-day-2018/careertrek-hacktoberfest-day-2018.github.io/) [![CareerTrek](https://img.shields.io/badge/pull%20request-welcomed-00cbae.svg)](https://careertrek.com/)  

## 🚀 Quick start
0.  **Opt-in [Hacktoberfest 2018](https://hacktoberfest.digitalocean.com)**

   ![hacktoberfest](https://hacktoberfest.digitalocean.com/assets/logo-hacktoberfest-658b5aa2bd34e782d29c40bf6afbdff00f20fe1328efa6da17743878ba8db66f.png)

1.  **Fork project on GitHub**

2.  **Clone project**

### With Docker (Suggestion)
3.  **Install Docker**

    ```sh
    brew cask install docker
    ```

3.  **Build Docker image**

    ```sh
    docker build -t careertrekhacktober:latest docker/
    docker run --rm -it -p 8000:8000 -p 9000:9000 -v $(pwd):/webapp careertrekhacktober develop
    ```

4.  **Check-in your work.**

    ```sh
    # Example 
    git commit -am "My Awesome Commit"
    git push
    ```

5.  **Open Pull Request to original repository's develop branch**

6.  **Enjoy your work.**

    [>>>>>>>>>Click Me<<<<<<<<<<](https://careertrek-hacktoberfest-day-2018.github.io/)

### Without Docker
####  **Install the Gatsby CLI.**

    sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli

#### **Install dependencies.**

    sh
    yarn install

####  **Start developing.**

    sh
    yarn develop

## 📚 References
- [Docker](https://docs.docker.com/)
- [Gatsby](https://www.gatsbyjs.org/tutorial/)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Yarn](https://yarnpkg.com/en/docs)
- [Cucumber](https://docs.cucumber.io/)

## 🗒 TodoList
- [x] Change favicon to CareerTrek's
- [x] Change fonts to Hacktoberfest's 
- [x] Links to BizReach and CareerTrek
- [x] Show Map on the home page
- [ ] Multi-languages support
- [ ] Add encourage button
- [ ] Add photo showcase
- [ ] Rearrange code related to deployment
- [ ] Improve Cucumber code coverage
- [ ] Unit test
- [ ] TypeScript declaration for Typography
