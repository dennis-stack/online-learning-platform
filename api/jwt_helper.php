<?php
function jwt_encode($payload, $key) {
    $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);
    $header = base64_encode($header);
    
    $payload = json_encode($payload);
    $payload = base64_encode($payload);

    $signature = hash_hmac('sha256', "$header.$payload", $key, true);
    $signature = base64_encode($signature);

    return "$header.$payload.$signature";
}

function jwt_decode($jwt, $key) {
    list($header, $payload, $signature) = explode('.', $jwt);
    
    $expectedSignature = base64_encode(hash_hmac('sha256', "$header.$payload", $key, true));

    if ($signature !== $expectedSignature) {
        return null; // Invalid token
    }

    return json_decode(base64_decode($payload), true);
}
?>