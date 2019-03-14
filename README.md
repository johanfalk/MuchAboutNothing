# MuchAboutNothing
Much about nothing in order to learn microservices.

## Create backup from mongodb container
~~~~
docker run --rm -it --network <NETWORK> --link <CONTAINER>:<MONGO_ALIAS> -v /backup:/backup mongo mongodump --host <MONGO_ALIAS> --out /backup/
~~~~

## Restore backup from mongodb container
~~~~
docker run --rm -it --network <NETWORK> --link <CONTAINER>:<MONGO_ALIAS> -v /backup:/backup mongo mongorestore --drop --host <MONGO_ALIAS> /backup/
~~~~

## TODO's
### General:
* Fix docker-compose.yml for non dev
* Implement server access.
* Configure environment for development, production etc.

### User service:
* Filter the user data returned when e.g, authorizing.
* Implement a lifetime on access tokens.
* Improve error handling.
