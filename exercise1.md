# Hypothetical situation
Team of 6 people, building a learning platform that's tailored to people who wish to learn on the go. The key value proposition of the platform is the learning format – where
* The format is a short audio of between 15 to 30 mins. 
* The audo is accompanied by slides that users can simply browse through. 
* After each chapter of a lesson, users can unlock notes in an exciting and rewarding way. 
* Users can collect notes for later review, as well. 
* The expected monthly active users for the 1st month of launch: 10k. 

# Technology of choice: 
* Language: Ruby

Tech stack:
* Backend: Ruby on Rails, PostgreSQL, Redis, Sidekiq
* Frontend: React, Redux, React Router, Tailwind CSS

# CI/CD considerations
## Tools
Linting:
* **RuboCop:** A Ruby code linter that can be used to identify and correct potential errors and stylistic issues in the code.
* **Brakeman:** A Ruby security scanner that can be used to identify potential security vulnerabilities in the code. 

Building:
* **Rake:** A Ruby build tool that can be used to automate tasks such as compiling code, running tests, and generating documentation.

Testing:
* **RSpec:** A Ruby testing framework that can be used to write and run unit tests, integration tests, and system tests.
* **Cucumber:** A Ruby behavior-driven development (BDD) framework that can be used to write tests that describe the desired behavior of the application.

Packaging:
* **Bundler:** A Ruby dependency management tool that can be used to package the application's dependencies into a single Gemfile.
* **fpm:** A multi-platform package manager that can be used to create packages for a variety of platforms, including Linux, macOS, and Windows.

Deploying:
* **Capistrano:** A Ruby deployment tool that can be used to automate the process of deploying the application to a production server.

## Setting up CI
Alternatives for setting up the CI besides Jenkins and GitHub: **Travis CI**, **CircleCI**.

## Self-hosted or cloud-based?
Given our scenario, it's better to do a cloud-based environment, since we have a small team and our application is moderately complex. It's even fair to pay for our usage, and I'm guessing for the first month or so, we should be able to get by with the free plan. 
Usually, in making such decision, we should consider:
* **Budget:** Self-hosted CI/CD pipelines can be more cost-effective in the long run, but there is an upfront cost of setting up and maintaining the infrastructure. Cloud-based CI/CD pipelines are typically more expensive, but they are also easier to set up and manage.
* **Control:** With a self-hosted CI/CD pipeline, we have full control over the environment. With a cloud-based CI/CD pipeline, we are relying on a third-party provider to manage the infrastructure.
* **Scalability:** Self-hosted CI/CD pipelines can be more difficult to scale than cloud-based CI/CD pipelines. Cloud-based CI/CD pipelines can be scaled up or down as needed.
* **Security:** Self-hosted CI/CD pipelines can be more secure than cloud-based CI/CD pipelines, but we are responsible for managing the security of the infrastructure. Cloud-based CI/CD providers typically have robust security measures in place.

Lastly, our level of technical expertise matters as well. Since setting up a self-hosted environment requires high level of expertise, we may default to a cloud-hosted service.

To trigger GitHub Actions workflow