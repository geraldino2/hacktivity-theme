# hacktivity
A Hugo theme somewhat similar to the [hacktivity](https://hackerone.com/hacktivity) section of Hackerone. Uses [Tailwind CSS](https://tailwindcss.com/), [Animate.css](https://animate.style/) and [jQuery](https://jquery.com/). Minimal, responsive and with a dynamic pagination setup. A **demo** is available at https://hacktivity.geraldino2.com.

## Post archetype guide
```yaml
---
title: "TITLE"
datetime: {{ .Date | time.Format ":date_medium" }}
severity: "P1"
bounty: 100
company: "HackerOne"
company_avatar: "COMPANY_AVATAR_URL"
vdp_url: "https://hackerone.com/security"
report_url: ""
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ante eros. Etiam felis justo, rutrum non rutrum a, dignissim eu elit. Duis mollis maximus augue ut auctor. Cras interdum ultricies turpis, et congue odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce est justo, accumsan vitae."
---
CONTENT
```
* `title`: if blank, a censored rectangle will take its place;
* `datetime`: auto-generated as Jan 2, 2006;
* `severity`: Bugcrowd ratings, P1=critical->P4=low;
* `bounty`: USD, if no bounty was awarded set 0 and it will not show up;
* `company`: company name;
* `company_avatar`: link to the company avatar;
* `vdp_url`: link that the company avatar redirects to;
* `report_url`: if set, the report title becomes a link to the original report;
* `summary`: report summary shown below its title, can be set empty;
* `content`: full writeup, will only appear in single post view.


## Preview
![Index page](/screenshots/index.png)
![Single post view](/screenshots/post.png)
