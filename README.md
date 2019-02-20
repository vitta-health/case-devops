<img src="/assets/logo_black.png" />

# Vitta

Glad to meet you friend!

We are more than happy to see you are interested on our challenge!

## About Us

You can get to know more about us!

| Media | |
|:---:|:---:|
| **Blog** and news! | [blog in pt-BR](https://blog.vitta.me/) |
| **Facebook** page | [link](https://www.facebook.com/vitta.me/) |
| **LinkedIn** and opportunities! | [link](https://www.linkedin.com/company/3990515/) |

## Knowledge Test

This is a test done to know a little more of each candidate for the position of DevOps in Vitta. This is not an objective test, capable of generating a grade or a success rate, but rather a case study with the purpose of knowing the knowledge, experiences and way of working of a cadidate. Feel free to develop your solution to the proposed problem and if in doubt contact your interviewer.

## Scenario

Within the `app` directory there is a very simple application in Node.js. When this application goes up it will read a `NODE_API_PASS` environment variable which will be the api password. That is, when executing a call to this application we must pass a `Header` of` Authorization` with the specific token. For example: `curl -H 'Authorization: Token {NODE_API_PASS_VALUE}" http://localhost:3000/ `. You should let us know how we can easily set/change this token.

Your goal is to deploy this application to AWS. You will probably need to create a free-tier account with AWS, or use an existing one. But do not worry, we will not look at your account or call your application already running, we want you to create a way that we can recreate all your infrastructure in our account in a simple way. You choose the form. Create a `part1.md` file describing all the steps for us to run your infrastructure in our environment. These are the points of attention:

* You should start from an AWS environment without any infrastructure already created.
* The application should run on docker containers.
* Your infrastructure should look at the concepts of elastic infrastructure (https://medium.com/@guilhermeviebig/infraestrutura-eltica-using-aws-nodejs-e-terraform-dc1fc31db45f).
* A recipe using one or more configuration management tools (e.g. Terraform, CloudFormation, etc.) that deploys the stack on the AWS cloud.

If you have knowledge of NodeJS development, feel free to implement or suggest simple improvements to the applications to make them production-ready.

We don't expect a production-grade solution, but we expect you to show that you'd be able to deploy a production-grade distributed system given enough tools and time.

## Concept Testing

This test seeks to understand your architecture concepts in AWS, looking at an existing scenario. We want to know if you understand AWS and its products and how communication works between them.

## Scenario

Looking at the image below, create a `part2.md` file with the technical description of the flow of this topology, according to your understanding.


<img src="/assets/schema.png" />

# Delivery

* Please do **not** fork this repository and do **not** publish your solution online!
* You should clone this repository and commit all modifications, but do not open a pull request or leave your response code open on a fork, for example.
* After it finishes, compact any directory and send us. ** We want to review your commits **.
* Send us it.

## Contact

Feel free to reach out if you have any questions! Also, we expect this problem to take some hours at most, but please do get in touch if you need more time to provide a good solution! It is far better than delivering something that does not work :)

Good job!


Source: Geru