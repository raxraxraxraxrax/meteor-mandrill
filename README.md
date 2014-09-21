Mandrill for Meteor
===============

Meteor package for sending email via Mandrill

##  Installation

``` sh
$ meteor add email

$ meteor add http

$ mrt add mandrill
```

### Usage for SMTP email
    # in server code
    Meteor.startup(function() {
      return Meteor.Mandrill.config({
        username: "YOUR_MANDRILL_USERNAME",
        key: "YOUR_MANDRILL_API_KEY"
      });
    });

    this.sendEmail = function(to, subject, htmlText) {
      return Meteor.Mandrill.send({
        to: to,
        from: fromEmail,
        subject: subject,
        html: htmlText
      });
    };

### Usage for API email
# Read more on how to use merge tags in the Mandrill Docs
# http://help.mandrill.com/entries/21678522-How-do-I-use-merge-tags-to-add-dynamic-content-
    # in server code
    Meteor.Mandrill.sendTemplate({
      key: "YOUR_MANDRILL_API_KEY",
      templateSlug: "test1",
      globalMergeVars: [
        {
          name: "var1",
          content: "Global Value 1"
        }
      ],
      mergeVars: [
        {
          "rcpt": "email@example.com",
          "vars": [
            {
              "name": "fname",
              "content": "John"
            }, {
              "name": "lname",
              "content": "Smith"
            }
          ]
        }
      ],
      fromEmail: "from@example.com",
      toEmail: "to@example.com"
    });
