## Backup

``` bash
sudo docker exec -it notasusp_db_1 mongodump  --username=admin  --out=/data/backup/$(date +"%Y-%m-%d")
```
