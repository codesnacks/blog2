  code: 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD',
  errno: 1366,
  sqlMessage: "Incorrect string value: '\\xF0\\x9F\\x99\\x8F\\xF0\\x9F...' for column 'name' at row 1",
  sqlState: 'HY000',


add this to my.cnf:

```
[client]
default-character-set = utf8mb4
[mysql]
default-character-set = utf8mb4
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
```

restart mysqld with `mysql.server restart` (on a Mac)


Change your tables with

```
ALTER TABLE your_table CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
```