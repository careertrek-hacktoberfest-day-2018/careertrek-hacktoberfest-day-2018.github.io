## 🚀 Quick start
0.  **Opt-in [Hacktoberfest 2018](https://hacktoberfest.digitalocean.com)**

   ![hacktoberfest](https://hacktoberfest.digitalocean.com/assets/logo-hacktoberfest-658b5aa2bd34e782d29c40bf6afbdff00f20fe1328efa6da17743878ba8db66f.png)


### With Docker (Suggestion)
1. **Install Docker**

    ```sh
    brew cask install docker
    ```

2. **Build Docker image**

    ```sh
    docker build -t careertrekhacktober:latest docker/
    docker run --rm -it -p 8000:8000 -p 9000:9000 -v $(pwd):/webapp careertrekhacktober develop
    ```

### Without Docker
1.  **Install the Gatsby CLI.**

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2. **Install dependencies.**

    ```sh
    yarn install
    ```

3.  **Start developing.**

    ```sh
    yarn develop
    ```

## 📚 References
- [Docker](https://docs.docker.com/)
- [Gatsby](https://www.gatsbyjs.org/tutorial/)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Yarn](https://yarnpkg.com/en/docs)
- [Cucumber](https://docs.cucumber.io/)

## 🗒 TodoList
- [ ] Change favicon to CareerTrek's 
- [ ] Links to BizReach and CareerTrek
- [ ] Show Map on the home page
- [ ] Multi-languages support
- [ ] Add encourage button
- [ ] Rearrange code related to deployment
- [ ] Unit test
- [ ] TypeScript declaration for Typography