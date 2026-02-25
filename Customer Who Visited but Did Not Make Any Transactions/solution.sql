select Visits.customer_id, count(Visits.customer_id) as count_no_trans
from Visits 
where Visits.visit_id not in (
    select distinct(visit_id) from Transactions
)
group by customer_id