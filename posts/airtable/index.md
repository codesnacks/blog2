---
title: How to use the airtable API with JavaScript
spoiler: This posts explains how to make use of the airtable API
date: '2019-08-02'
---
Airtable is a very cool application. It's a spreadsheet merged with a database. And it has an API that you can use with JS.


0. `npm init -y`
1. First open [Airtable](https://airtable.com/) and click `Add a base`. Select `Start from scratch` and give your base a name. 
2. Then open the [API](https://airtable.com/api) and click your newly created base. and copy the ID of your base, which will be shown on that page.
3. Visit [Account](https://airtable.com/account) and click `generate API key`
4. `npm i airtable`

Now let's create an index.js file with the following content and insert your `api key` and you `base id`.

```javascript
const airtable = require("airtable");

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "YOUR API KEY"
});

const base = airtable.base("YOUR BASE ID");

base("Table 1").create({ Name: "test", Notes: "test notes" }, function(
  err,
  record
) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});
```

By default your base will have a table named `Table 1` which has three fields: `Name`, `Notes` and `Attachment`. This code shown above will insert a Name and a Note and return the id of that record.


In general you should never have your credentials directly in the code. Usually you inject your credentials via [Environment Variables](/nodejs/environment-variables)


---
---
---
---
## Getting a record by its primary field


## Update or Insert

You might run into situations, where you want to update a record if it exists or insert it, if it doesn't exist. There is no built in command for this, you we'll have to do this manually:

* get the record (by one or multiple fields)
* if the record exists: update it
* if it doesn't exist: insert it

Let's write a little module for this:

```javascript
const Airtable = require("airtable");
const base = new Airtable({ apiKey: "" }).base("appTV9TNuvMkIDrXg");

const create = record => {
  base("lowerFunnel").create(record, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });
};

const replace = (id, record) => {
  base("lowerFunnel").replace(id, record, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.get("experimentVariation"));
  });
};

const updateOrInsert = record => {
  const primaryField = record.experimentVariation;

  base("lowerFunnel")
    .select({
      maxRecords: 1,
      view: "Grid view",
      filterByFormula: `{experimentVariation} = "${primaryField}"`,
    })
    .firstPage(function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(r) {
        console.log("Retrieved", r.get("experimentVariation"));
        replace(r.id, record);
      });

      if (!records.length) {
        console.log("empty");
        create(record);
      }
    });
};

module.exports = {
  updateOrInsert,
};
```

![Image of Yaktocat](codesnacks.svg)