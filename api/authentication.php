<?php
/**
 * Created by PhpStorm.
 * User: binhn
 * Date: 4/4/2017
 * Time: 9:57 AM
 */

$userJson = file_get_contents('php://input');
$user = json_decode($userJson);

if ('admin' === $user->username && 'admin' === $user->password) {
    echo json_encode([
        'username' => 'admin',
        'name' => 'Administrator',
    ]);
    exit;
}

header("HTTP/1.1 401 Login failed!");
echo json_encode([
    'message' => 'Login failed'
]);