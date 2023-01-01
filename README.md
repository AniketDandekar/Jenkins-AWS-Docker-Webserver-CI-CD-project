# Jenkins-CI-CD-project

* In this project we intigrate GitHub, Jenkins, Docker, AWS to launch a website which shows motivational quotes
 
* The script is triggered by a git push to a specific branch or repository on GitHub.
* The script clones the repository
* The script uses download files from the repository, such as a compressed archive or a script.
* The script builds a Docker image using the downloaded file as the source.
* The script runs unit tests on the web page using the built Docker image.
* If the unit tests pass, the script deploys the web page to a production environment.
* The script runs a tests on the web page in the testing environment and wait for manual approval.
* If the integration tests pass, the script deploys the web page to a production environment, such as on AWS EC2 instance.
* This CI/CD pipeline allows efficient and automated testing and delivery of the web page, ensuring that it is reliable and up to date.
