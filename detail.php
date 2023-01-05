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
    <title><?php echo strtoupper($_POST["label"]); ?></title>
</head>

<body>
    <div class="header-wrapper">
        <div class="header-overlay">
            <div class="overlay-navbar d-flex flex-row align-items-center m-4">
                <a href="index.html">
                    <div id="logo"></div>
                </a>
                <div class="container-fluid"></div>
                <a href="videos.php" class="px-1 px-md-3">VIDEOS</a>
                <a href="events.php" class="px-1 px-md-3">EVENTS</a>
                <a href="contact.html" class="px-1 px-md-3">CONTACT</a>
            </div>
            <div class="overlay-content d-flex align-items-center">
                <div class="text-center w-100">
                    <h1 class="display-1"><?php echo strtoupper($_POST["label"]); ?></h1>
                    <p class="lead"><?php echo $_POST["desc"]; ?></p>
                </div>
            </div>
        </div>
    </div>
    <div class="content-wrapper content-wrapper-first">
        <div class="row">
            <p class="lead p-5 p-md-5 m-md-5 text-center"><?php echo $_POST["longDesc"]; ?></p>
            <?php
            $path = "imgs/gals/" . $_POST["galPath"];
            $imgs = glob($path . "*.{jpg,png}", GLOB_BRACE);
            $videosCount = count($imgs);
            $i = 0;
            foreach ($imgs as $img) {
                $isLastAndNewRow = ++$i === $videosCount && ($i % 2 != 0);
                echo '<div class="col-12 col-md-' . ($isLastAndNewRow ? "12" : "6") . ' p-0 card-background-effect-wrapper">
                        <div class="card-background card-background-effect" style="background-image: url(\'' . $img . '\');" data-img-path="' . $img . '">
                            <div class="card-content-holder' . ($isLastAndNewRow ? " card-content-holder-detail-image-last-and-new" : "") . '"></div>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
    <div class="modal fade" id="imgModal" tabindex="-1" aria-labelledby="imgModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content modal-video-wrapper text-center">
                <a data-bs-dismiss="modal" class="btn text-light btn-bigger"><i class="bi bi-x-circle ps-2"></i></a>
                <img id="modalImage" class="img-fluid" src="">
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $(".card-background").click(function() {
                $("#modalImage").attr("src", $(this).data("imgPath"));
                $("#imgModal").modal("show");
            });
        });
    </script>
</body>

</html>