# LERRORS (Laravel-errors-and-solutions)

>  An axios global wrapper that makes using ajax more easy and maintenable.


[![Build Status](https://travis-ci.org/codingnninja/raybaba.svg?branch=master)](https://travis-ci.org/codingnninja/raybaba)


## Installation

```
npm install raybaba

```

## How to use it?

```
import createEndpoint from 'raybaba';


const endpoints = createEndpoint({name:posts}, url);

endpoints.posts.getAll();
endpoints.posts.getOne({id:1});
endpoints.posts.create(data, config);
endpoints.posts.update(data, config);
endpoints.posts.delete({id:1});

```

## @TODO

This should support pagination/infinite scroll out of the box and the documentation should be made better.

## Love this?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or HackerNews? Spread the news!

Don't forget to [follow me on twitter](https://twitter.com/codingnninja)!

Thanks!
Ayobami.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
