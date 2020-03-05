**Create migration :** node_modules/.bin/sequelize migration:create --name=create-users

**Populate migration with data** (See examples inside the project)

**Execute all migration's :** node_modules/.bin/sequelize db:migrate


**Run this query in the datbaase to allow GROUP BY clause to be contained in nonaggregated column** : SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));