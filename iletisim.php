<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
    $preference = isset($_POST['contactPreference']) ? htmlspecialchars(trim($_POST['contactPreference'])) : '';

    error_log('POST Data: ' . json_encode($_POST));
    

    // Sunucu tarafı doğrulama
    $errors = [];

    if (empty($name) || strlen($name) < 3) {
        $errors[] = 'Ad Soyad en az 3 karakter olmalıdır.';
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Geçerli bir e-posta adresi giriniz.';
    }

    if (empty($phone) || !preg_match('/^(05\d{9}|\+90\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2})$/', preg_replace('/\s/', '', $phone))) {
        $errors[] = 'Geçerli bir telefon numarası giriniz (05XX XXX XX XX).';
    }

    if (empty($subject)) {
        $errors[] = 'Lütfen bir konu seçiniz.';
    }

    if (empty($message) || strlen($message) < 10) {
        $errors[] = 'Mesaj en az 10 karakter olmalıdır.';
    }

    if (empty($preference)) {
        $errors[] = 'Lütfen bir iletişim tercihi seçiniz.';
    }

    

    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Form doğrulama hataları mevcut.',
            'errors' => $errors
        ]);
        exit;
    }

    // Konu eşleştirme
    $subjectLabels = [
        'genel' => 'Genel Bilgi',
        'is' => 'İş Teklifi',
        'proje' => 'Proje İşbirliği',
        'oneri' => 'Öneri / Görüş',
        'diger' => 'Diğer'
    ];

    $preferenceLabels = [
        'email' => 'E-posta',
        'phone' => 'Telefon',
        'both' => 'Her İkisi'
    ];

    // Başarılı yanıt
    $responseData = [
        'success' => true,
        'message' => 'Mesajınız başarıyla alındı! En kısa sürede size dönüş yapılacaktır.',
        'data' => [
            'Ad Soyad' => $name,
            'E-posta' => $email,
            'Telefon' => $phone,
            'Konu' => $subjectLabels[$subject] ?? $subject,
            'İletişim Tercihi' => $preferenceLabels[$preference] ?? $preference,
            
            
            'Mesaj' => $message,
            
            'Gönderim Tarihi' => date('d.m.Y H:i:s')
        ]
    ];

    echo json_encode($responseData);
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Sadece POST istekleri kabul edilir.'
    ]);
}
?>
