-- Write your PostgreSQL query statement below
delete from Person p1 using Person p2
where p1.id > p2.id and  p1.email = p2.email 