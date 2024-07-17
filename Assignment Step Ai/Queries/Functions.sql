CREATE OR REPLACE FUNCTION increment_message_order()
RETURNS TRIGGER AS $$
BEGIN
    SELECT COALESCE(MAX(MessageOrder), 0) + 1 INTO NEW.MessageOrder
    FROM Chat
    WHERE ConversationID = NEW.ConversationID;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_or_create_conversation(
    patient_id INT,
    doctor_id INT
) RETURNS INT AS $$
DECLARE
    conv_id INT;
BEGIN
    SELECT ConversationID INTO conv_id
    FROM Conversations
    WHERE PatientID = patient_id AND DoctorID = doctor_id;

    IF conv_id IS NULL THEN
        INSERT INTO Conversations (PatientID, DoctorID)
        VALUES (patient_id, doctor_id)
        RETURNING ConversationID INTO conv_id;
    END IF;

    RETURN conv_id;
END;
$$ LANGUAGE plpgsql;