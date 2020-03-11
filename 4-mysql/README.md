# MySQL/MariaDB

1. Create sample database
```sql
CREATE DATABASE webui;
```

2. Create sample table
```sql
USE webui;
CREATE TABLE Users (
    UserID int,
    LastName varchar(255),
    FirstName varchar(255)
);
```

3. Use MySQL module to insert and select sample data, display ID of inserted rows, display name of selected users.
