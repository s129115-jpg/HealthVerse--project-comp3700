<?php
$fname     = $_POST['fname'];
$lname     = $_POST['lname'];
$email     = $_POST['email'];
$gender    = $_POST['gender'];
$age       = $_POST['select_age'];
$feedback  = $_POST['feedback'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Result | Health Verse</title>

    <!-- Bootstrap Only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">

<div class="container mt-5">

    <div class="card shadow p-4">

        <h2 class="text-center text-success mb-4">Thank You for Your Feedback!</h2>

        <p class="text-secondary text-center">
            Below is the information you submitted:
        </p>

        <hr>

        <div class="row mb-3">
            <div class="col-md-6">
                <strong>First Name:</strong>
                <p><?= htmlspecialchars($fname); ?></p>
            </div>
            <div class="col-md-6">
                <strong>Last Name:</strong>
                <p><?= htmlspecialchars($lname); ?></p>
            </div>
        </div>

        <div class="mb-3">
            <strong>Email:</strong>
            <p><?= htmlspecialchars($email); ?></p>
        </div>

        <div class="mb-3">
            <strong>Gender:</strong>
            <p><?= htmlspecialchars($gender); ?></p>
        </div>

        <div class="mb-3">
            <strong>Age Group:</strong>
            <p><?= htmlspecialchars($age); ?></p>
        </div>

        <div class="mb-3">
            <strong>Your Feedback:</strong>
            <div class="p-3 bg-light border rounded">
                <?= nl2br(htmlspecialchars($feedback)); ?>
            </div>
        </div>

        <div class="text-center mt-4">
            <a href="questionnaire.html" class="btn btn-primary">Back to Form</a>
        </div>

    </div>
</div>

</body>
</html>
