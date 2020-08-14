## Backup

``` bash
docker exec -it notasusp_db_1 bash
mongodump  --username=admin  --out=/data/backup/$(date +"%Y-%m-%d")
```
