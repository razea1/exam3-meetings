CREATE TABLE dev_group (
  id int NOT NULL AUTO_INCREMENT,
   name varchar(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE meeting (
  id int NOT NULL AUTO_INCREMENT,
  dev_group_id int NOT NULL,
  start_time datetime NOT NULL,
  end_time datetime NOT NULL,
  description varchar(255) NOT NULL,
  meeting_room varchar(255) NOT NULL,
  PRIMARY KEY (id)
)

 
  
-- select meeting.* , DevGroup.group_name as id
-- from meeting inner join DevGroup
-- on meeting.devGroupId=DevGroup.id