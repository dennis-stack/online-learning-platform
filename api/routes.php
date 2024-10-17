<?php
include 'auth.php';
include 'course.php';
include 'material.php';
include 'progress.php';

header("Content-Type: application/json");
$requestMethod = $_SERVER["REQUEST_METHOD"];
$path = explode('/', trim($_SERVER['REQUEST_URI'], '/'));

if ($path[0] === 'api' && $path[1] === 'auth') {
    if ($requestMethod === 'POST' && $path[2] === 'register') {
        $data = json_decode(file_get_contents('php://input'), true);
        register($data['email'], $data['password'], $data['role']);
    } elseif ($requestMethod === 'POST' && $path[2] === 'login') {
        $data = json_decode(file_get_contents('php://input'), true);
        login($data['email'], $data['password']);
    }
}

if ($path[0] === 'api' && $path[1] === 'courses') {
    if ($requestMethod === 'POST' && $path[2] === 'create') {
        validateInstructor();
        $data = json_decode(file_get_contents('php://input'), true);
        createCourse($data['name'], $data['description'], getUserId());
    } elseif ($requestMethod === 'POST' && $path[2] === 'approve') {
        validateApprover();
        approveCourse($path[3]);
    } elseif ($requestMethod === 'POST' && $path[2] === 'enroll') {
        validateStudent();
        enrollInCourse($path[3], getUserId());
    }
}

if ($path[0] === 'api' && $path[1] === 'materials') {
    if ($requestMethod === 'POST' && isset($_FILES['file'])) {
        $courseId = $path[2];
        uploadCourseMaterial($courseId, $_FILES['file']);
    } elseif ($requestMethod === 'GET') {
        getCourseMaterials($path[2]);
    }
}

if ($path[0] === 'api' && $path[1] === 'progress') {
    if ($requestMethod === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        trackProgress($data['student_id'], $data['course_id'], $data['completed_percentage']);
    } elseif ($requestMethod === 'GET') {
        getProgress($path[2], $path[3]);
    }
}
?>