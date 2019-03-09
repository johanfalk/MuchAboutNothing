# MuchAboutNothing
Much about nothing in order to learn microservices.

# Create backup from mongodb container
docker run --rm -it --network <NETWORK> --link <CONTAINER>:<MOMGO_ALIAS> -v /backup:/backup mongo mongodump --host <MOMGO_ALIAS> --out /backup/

# Restore backup from mongodb container
docker run --rm -it --network <NETWORK> --link <CONTAINER>:<MOMGO_ALIAS> -v /backup:/backup mongo mongorestore --drop --host <MOMGO_ALIAS> /backup/

