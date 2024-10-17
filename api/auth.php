<?php
include 'config.php';
include 'jwt_helper.php';

function register($email, $password, $role) {
    global $mysqli;

    $stmt = $mysqli->prepare("INSERT INTO users (email, password, role) VALUES (?, ? , ?)");
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $stmt->bind_param("sss", $email, $hashedPassword, $role);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'User registered successfully']);
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Registration failed']);
    }

    $stmt->close();
}

function login($email, $password) {
    global $mysqli;

    $stmt = $mysqli->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        $payload = [
            'id' => $user['id'],
            'email' => $user['email'],
            'role' => $user['role'],
            'exp' => time() + 3600 // Token expires in 1 hour
        ];

        $jwt = jwt_encode($payload, 'your-secret-key');
        echo json_encode(['token' => $jwt]);
    } else {
        http_response_code(401);
        echo json_encode(['message' => 'Invalid credentials']);
    }

    $stmt->close();
}
?>