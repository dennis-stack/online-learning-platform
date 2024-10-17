<?php
include 'config.php';

function uploadCourseMaterial($courseId, $file) {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($file["name"]);
    
    if (move_uploaded_file($file["tmp_name"], $targetFile)) {
        global $mysqli;

        $stmt = $mysqli->prepare("INSERT INTO course_materials (course_id, file_path) VALUES (?, ?)");
        $stmt->bind_param("is", $courseId, $targetFile);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'File uploaded successfully']);
        } else {
            echo json_encode(['message' => 'File upload failed']);
        }

        $stmt->close();
    } else {
        echo json_encode(['message' => 'File upload failed']);
    }
}

function getCourseMaterials($courseId) {
    global $mysqli;

    $stmt = $mysqli->prepare("SELECT * FROM course_materials WHERE course_id = ?");
    $stmt->bind_param("i", $courseId);
    $stmt->execute();
    $result = $stmt->get_result();
    $materials = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($materials);

    $stmt->close();
}
?>