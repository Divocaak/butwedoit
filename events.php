<?php require_once "utils.php"; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link href="style/general.css" rel="stylesheet">
    <link href="style/header.css" rel="stylesheet">
    <link href="style/card.css" rel="stylesheet">
    <title>EVENTS</title>
</head>

<body class="bg-dark">
    <div class="header-wrapper">
        <video autoplay muted loop id="myVideo">
            <source src="reel.mp4" type="video/mp4">
        </video>
        <div class="header-overlay d-flex align-items-center">
            <div class="text-center w-100">
                <h1 class="display-1">EVENTS</h1>
                <p class="lead">asdlkansdkln</p>
                <a href="index.html" class="btn text-light btn-bigger"><i class="bi bi-arrow-left-circle pe-2"></i></a>
            </div>
        </div>
    </div>
    <div class="content-wrapper">
        <?php
        $json = json_decode(file_get_contents("content.json"), true);
        foreach ($json["events"] as $category) {
            echo '<div class="text-center py-5 mt-5">
            <h2 class="display-4 text-uppercase">' . $category["label"] . '</h2>
                    <p class="lead">' . $category["desc"] . '</p>
                </div>
                <div class="row">';
            foreach ($category["projects"] as $project) {
                buildCard(
                    $project["youtube"] ?? "",
                    $project["label"],
                    $project["shortDesc"],
                    $project["thumbnail"],
                    $project["textColor"],
                    $project["backgroundColor"],
                    $project["detailGalleryPath"] ?? "",
                    $project["detailLongDesc"] ?? ""
                );
            }
            echo "</div>";
        }
        ?>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
    </script>

</body>

</html>