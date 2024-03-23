curl -XPOST -H "Content-type: application/json" -d '{"email": "test@queue.com", "type": "recovery"}' 'localhost:3000/add_to_queue/email'
exit