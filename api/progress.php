<?php
include 'config.php';

function trackProgress($studentId, $courseId, $completedPercentage) {
    global $mysqli;

    $stmt = $mysqli->prepare("INSERT INTO progress (student_id, course_id, completed_percentage) VALUES (?, ?) ON DUPLICATE KEY UPDATE completed_percentage = ?");
    $stmt->bind_param("iid", $studentId, $courseId, $completedPercentage);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Progress updated successfully']);
    } else {
        echo json_encode(['message' => 'Progress update failed']);
    }

    $stmt->close();
}

function getProgress($studentId, $courseId) {
    global $mysqli;

    $stmt = $mysqli->prepare("SELECT * FROM progress WHERE student_id = ? AND course_id = ?");
    $stmt->bind_param("ii", $studentId, $courseId);
    $stmt->execute();
    $result = $stmt->get_result();
    $progress = $result->fetch_assoc();
    echo json_encode($progress);

    $stmt->close();
}
?>