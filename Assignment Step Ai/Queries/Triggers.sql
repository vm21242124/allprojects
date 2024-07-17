CREATE TRIGGER before_insert_message
BEFORE INSERT ON Chat
FOR EACH ROW
EXECUTE FUNCTION increment_message_order();