# Regular Expressions
---

# Task
---

* Pass [following tutorial](https://regexone.com/) and convert all the codes into js with usage.
* Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:
* Exactly 4 or 6 characters.
* Only numerical characters (0-9).
* No whitespace.

|Input| Output|
|---|---|
|myRegExp.test("1234")| true |
|myRegExp.test("45135")| false |
|myRegExp.test("89abc1")| false |
|myRegExp.test("900876")| true |
|myRegExp.test(" 4983")| false |

[Solution](https://github.com/Arman0701/Error-Regex/blob/master/Regex/Required-Tasks/Task-1.js)

---


# Task
---
```javascript
const REGEXP = /abc/;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(REGEXP);
'<a href="/">', '<input type="radio" checked>', "<b>";
```
[Solution]()

---
