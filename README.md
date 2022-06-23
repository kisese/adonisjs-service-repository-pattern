## References

https://www.section.io/engineering-education/build-a-restful-api-with-adonisjs/

https://medium.com/@shemsiu/ioc-container-and-dependency-injection-in-adonis-v5-216774c2a476

https://github.com/adonisjs/core/discussions/1881#discussioncomment-124531

https://docs.adonisjs.com/guides/application

## Try it
1. Create a test db schema
2. Copy the env file
```bash
cp .env.example .env
```
3. Update the db credential on the env file
4. Try it out
```bash
npm install

node ace migration:run

node ace serve --watch
```

http://127.0.0.1:3333/api/orders
