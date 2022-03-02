---
title: How to create a database connection and run queries to MySQL with python3
spoiler: Learn how to create a simple MySQL database connection using pymysql and run queries
date: '2020-01-29'
---

We will use [pymysql](https://pypi.org/project/PyMySQL/) to connect to MySQL in Python3. First, you have to install the module using *pip* or *pip3*:

```python
pip install -U pymysql
pip3 install -U pymysql
```

Then you can use this code to connect to your database and do a simple query:

```python
import pymysql

conn = pymysql.connect(host='127.0.0.1', unix_socket='/tmp/mysql.sock',
                       user='root', passwd="your_pw", db='your_db')
cur = conn.cursor()
cur.execute("SELECT * FROM your_table")
for r in cur:
    print(r)  # print whole row
    print(r[0])  # print first column of result

print(cur.description)  # gives a description of the table including all columns

cur.close()
conn.close()
```

If you don't want to access columns by index, but by name, you need to pass `cursorclass=pymysql.cursors.DictCursor` to the connection.

```python
import pymysql

# add cursorclass to access columns by name
conn = pymysql.connect(host='127.0.0.1', unix_socket='/tmp/mysql.sock', user='root',
                       passwd="your_pw", db='your_db', cursorclass=pymysql.cursors.DictCursor)
cur = conn.cursor()
cur.execute("SELECT * from your_table")
for r in cur:
    print(r["id"]) # now you can access columns by name (assuming you have an id column)
print(cur.description)
cur.close()
conn.close()
```