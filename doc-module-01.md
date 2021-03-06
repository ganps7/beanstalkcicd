## Lab 1 : Create a sample Node REST API

In this module, we create a simple Node REST API with Express test it locally on our Cloud9 environment.

### 1. Create Node REST API

#### 1.1 Download sources

1.  Run this command to download source files for this Lab

```
$ git clone https://github.com/fabianleeaws/beanstalkcicd.git
```

#### 1.2 Copy sample Node code over to current directory

1.  Run cp command

```
$ cp beanstalkcicd/lab-01/index.js index.js
```

2.  Check the sample code

```
$ cat index.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from a Node.js app!");
});
app.listen(process.env.PORT, () => {
  console.log("Server is up on: " + process.env.PORT);
});
```

3.  Now that we have the files needed, remove the cloned repository

```
$ sudo rm -r beanstalkcicd
```

#### 1.3 Configure Node start script

1.  Edit the package.json file

```
$ vi package.json
```

2.  Add a start command, changing the scripts block from

```
{
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    }
```

to

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }
```

#### 1.4 Test sample Node REST API

1.  Run this command to host the REST API

```
$ npm start

> beanstalk-workshop@1.0.0 start /home/ec2-user/environment/beanstalk-workshop
> node index.js

Server is up on: 8080
```

2.  Open a new terminal

![New Terminal](./imgs/01/01.png)

3.  Run the curl command to test API

```
$ curl localhost:8080

Hello world from a Node.js app!
```

We're done, continue to [Lab 2 : Deployment with Elastic Beanstalk Command Line Interface (CLI)](./doc-module-02.md)
