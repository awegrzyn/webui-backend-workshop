# MySQL/MariaDB

### Preparation

1. Create sample database
```sql
CREATE DATABASE webui;
```

2. Create sample table
```sql
USE webui;
CREATE TABLE Users (
    UserID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    LastName varchar(255),
    FirstName varchar(255)
);
```

### Tasks

1. Use MySQL module to insert and select sample data, display ID of inserted rows, display name of selected users.

### Documentation
- https://github.com/AliceO2Group/WebUi/blob/dev/Framework/docs/guide/mysql.md
