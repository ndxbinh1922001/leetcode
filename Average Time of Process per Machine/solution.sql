with start_time as (
    select machine_id, avg(timestamp) as sum_time
    from Activity
    where activity_type = 'start'
    group by machine_id
), end_time as (
    select machine_id, avg(timestamp) as sum_time
    from Activity
    where activity_type = 'end'
    group by machine_id
)

select start_time.machine_id, round(end_time.sum_time - start_time.sum_time,3) as processing_time
from start_time join end_time on start_time.machine_id = end_time.machine_id