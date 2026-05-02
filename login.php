<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';

    
    $emailPattern = '/^b\d{10}@sakarya\.edu\.tr$/';
    
    if (empty($email) || empty($password)) {
        echo json_encode([
            'success' => false,
            'message' => 'E-posta ve şifre alanları boş bırakılamaz.'
        ]);
        exit;
    }

    if (!preg_match($emailPattern, $email)) {
        echo json_encode([
            'success' => false,
            'message' => 'Geçersiz e-posta formatı. Format: b2412100001@sakarya.edu.tr'
        ]);
        exit;
    }

    
    $studentNo = explode('@', $email)[0];

    
    if ($password === $studentNo) {
        $_SESSION['logged_in'] = true;
        $_SESSION['student_no'] = $studentNo;
        $_SESSION['email'] = $email;

        echo json_encode([
            'success' => true,
            'message' => 'Hoşgeldiniz [' . $studentNo . ']',
            'student_no' => $studentNo,
            'redirect' => 'index.html'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Geçersiz şifre. Şifreniz öğrenci numaranız olmalıdır.'
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Sadece POST istekleri kabul edilir.'
    ]);
}
?>
