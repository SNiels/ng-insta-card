# ng-insta-card

Simple directive to create a Instagram card.

## install
Install with bower

```cmd
bower install ng-insta-card --save
```

or npm

```cmd
npm install ng-insta-card --save
```
or download manually

## usage


Include the Instagram library, and include the directive module.

```html
<script src="http://platform.instagram.com/en_US/embeds.js"></script>
<script src="bower/ng-insta-card/dist/ngInstaCard.min.js"></script>
```

Now you can create a Instagram card with the following markup.

```html
<insta-card insta-id="7NcWOyzBM9"></insta-card>
<div insta-card insta-id="7NcWOyzBM9"></div>
<div insta-card="7NcWOyzBM9"></div>
<div class="insta-card:7NcWOyzBM9;"></div>
```