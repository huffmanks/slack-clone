## getting started

```shell
git clone https://github.com/huffmanks/slack-clone.git
```

```shell
cd slack-clone && yarn
```

```shell
cp example.env .env
```

-   Update environment variables.

## mysql

```shell
mysql -u root -p
```

```shell
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

```shell
CREATE DATABASE slackClone;
```

```shell
USE slackClone;
```

```shell
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
```
