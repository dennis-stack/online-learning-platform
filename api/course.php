<?php
include 'config.php';
include 'auth_middleware.php';

function createCourse($name, $description, $instructorId) {
    global $mysqli;

    $stmt = $mysqli->prepare("INSERT INTO courses (name, description, instructor_id, status) VALUES (?, ?, ?, 'Pending')");
    $stmt->bind_param("ssi", $name, $description, $instructorId);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Course created successfully']);
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Course creation failed']);
    }

    $stmt->close();
}

function getCourses() {
    global $mysqli;

    $result = $mysqli->query("SELECT * FROM courses");
    $courses = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($courses);
}

function approveCourse($courseId) {
    global $mysqli;

    $stmt = $mysqli->prepare("UPDATE courses SET status = 'Approved' WHERE id = ?");
    $stmt->bind_param("i", $courseId);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Course approved successfully']);
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Approval failed']);
    }

    $stmt->close();
}

function enrollInCourse($courseId, $studentId) {
    global $mysqli;

    $stmt = $mysqli->prepare("INSERT INTO enrollments (course_id, student_id) VALUES (?, ?)");
    $stmt->bind_param("ii", $courseId, $studentId);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Enrolled in course successfully']);
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Enrollment failed']);
    }

    $stmt->close();
}

function getEnrolledCourses($studentId) {
    global $mysqli;

    $stmt = $mysqli->prepare("SELECT * FROM enrollments e JOIN courses c ON e.course_id = c.id WHERE e.student_id = ?");
    $stmt->bind_param("i", $studentId);
    $stmt->execute();
    $result = $stmt->get_result();
    $courses = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($courses);

    $stmt->close();
}
?>